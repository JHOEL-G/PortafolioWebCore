"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
// No se importa useControls si el panel de Leva se va a ocultar/eliminar.
// Si deseas mantenerlo oculto pero la lógica, descomenta la línea de importación y la de useControls en Badge3D.

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/card.glb"); // Precarga el modelo GLB
useTexture.preload(
  "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg"
); // Precarga la textura

export default function Badge3D() {
  // Estado para la posición de la cámara, que se ajustará dinámicamente
  const [cameraPosition, setCameraPosition] = useState([0, 0, 13]);

  // useEffect para manejar la responsividad de la cámara
  useEffect(() => {
    const handleResize = () => {
      // Determina si la pantalla es móvil (ancho <= 768px)
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        // En móvil, aleja la cámara para que el modelo quepa mejor
        setCameraPosition([0, 0, 16]);
      } else {
        // En escritorio, usa la posición original de la cámara
        setCameraPosition([0, 0, 13]);
      }
    };

    // Llama a la función de redimensionamiento una vez al cargar el componente
    handleResize();

    // Agrega un event listener para el evento 'resize' de la ventana
    window.addEventListener("resize", handleResize);

    // Función de limpieza para remover el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez al montar

  return (
    <Canvas camera={{ position: cameraPosition, fov: 25 }}>
      {/* Luz ambiental para iluminar la escena de forma general */}
      <ambientLight intensity={Math.PI} />
      {/* Componente Physics de Rapier para simulación de físicas */}
      <Physics
        interpolate // Interpola los movimientos para una animación más suave
        gravity={[0, -40, 0]} // Gravedad en el eje Y
        timeStep={1 / 60} // Paso de tiempo para la simulación de físicas
      >
        {/* El componente Band que contiene el modelo 3D y la simulación de cuerda */}
        <Band />
      </Physics>
      {/* Entorno para el fondo y la iluminación global */}
      <Environment black={0.75}>
        <color attach="background" args={["violet"]} />

        {/* Lightformers para simular luces de estudio y reflejos */}

        <Lightformer
          intensity={10}
          color="blue"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="red"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="black"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="green"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  );
}

// Componente Band que maneja la lógica del modelo 3D y las interacciones
function Band({ maxSpeed = 50, minSpeed = 10 }) {
  // Referencias para los cuerpos rígidos y el objeto de la banda
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
  // Vectores auxiliares para cálculos 3D
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore

  // Propiedades comunes para los segmentos de la cuerda
  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  };

  // Carga el modelo GLTF y sus nodos/materiales
  const { nodes, materials } = useGLTF("/card.glb");
  // console.log("Nodos del modelo GLB:", nodes); // Mantener para depuración si es necesario

  // Carga la textura para la banda
  const texture = useTexture(
    "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg"
  );
  // Obtiene el ancho y alto del lienzo de Three.js
  const { width, height } = useThree((state) => state.size);

  // Estado para la curva CatmullRom que define la forma de la banda
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  // Estados para el arrastre y el hover del modelo
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  // Definición de las uniones de cuerda y esféricas para la simulación de físicas
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]); // Une el punto fijo con el primer segmento
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]); // Une el primer segmento con el segundo
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]); // Une el segundo segmento con el tercero
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]); // Une el tercer segmento con la tarjeta

  // Efecto para cambiar el cursor del ratón al interactuar con el modelo
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  // Hook useFrame para la lógica de actualización por fotograma
  useFrame((state, delta) => {
    if (dragged) {
      // Si se está arrastrando, actualiza la posición cinemática de la tarjeta
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp()); // Despierta los cuerpos rígidos
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      // Corrige el jitter al tirar de la tarjeta
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      // Calcula la curva CatmullRom para la banda
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32)); // Actualiza los puntos de la geometría de la banda
      // Inclina la tarjeta hacia la pantalla
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal"; // Tipo de curva
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // Configuración de envoltura de textura

  return (
    <>
      {/* Grupo que contiene los cuerpos rígidos y el modelo 3D */}
      <group position={[0, 4, 0]}>
        {/* Cuerpo rígido fijo para el punto de anclaje de la cuerda */}
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        {/* Segmentos de la cuerda con colisionadores de bola */}
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        {/* Cuerpo rígido de la tarjeta, puede ser cinemático o dinámico */}
        <RigidBody
          position={[3, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          {/* Colisionador de cubo para la tarjeta */}
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          {/* Grupo que contiene las mallas del modelo 3D y maneja las interacciones del puntero */}
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              e.target.releasePointerCapture(e.pointerId), drag(false)
            )}
            onPointerDown={(e) => (
              e.target.setPointerCapture(e.pointerId),
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              )
            )}
          >
            {/* Malla de la tarjeta principal */}
            <mesh geometry={nodes.card.geometry}>
              {" "}
              {/* Corregido: 'card' sin sufijo */}
              <meshPhysicalMaterial
                map={materials["base.002"].map} // Material de la base con su mapa de textura
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            {/* Malla del clip (anillo) */}
            <mesh
              geometry={nodes.clip.geometry} // Corregido: 'clip' sin sufijo
              material={materials["metal.002"]} // Material metálico
              material-roughness={0.3}
            />
            {/* Malla de la abrazadera (clamp) */}
            <mesh
              geometry={nodes.clamp.geometry} // Corregido: 'clamp' sin sufijo
              material={materials["metal.002"]} // Material metálico
            />
          </group>
        </RigidBody>
      </group>
      {/* Malla para la banda/cuerda que conecta los segmentos */}
      <mesh ref={band}>
        <meshLineGeometry /> {/* Geometría de la línea de malla */}
        <meshLineMaterial
          color="red"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-3, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
