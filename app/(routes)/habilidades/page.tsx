'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Cloud, GitBranch, LucideIcon, Rocket, Brain, ShieldCheck } from 'lucide-react';
import AnimatedSkillCard from './components/AnimatedSkillCard';
import TransitionPage from '@/components/transitionpage';
import { CoverParticle } from '@/components/cover-particle';
import { useRouter } from 'next/navigation';
import { HiMiniArrowLeftStartOnRectangle } from 'react-icons/hi2';
import FloatingElements from '../contacto/components/FloatingElements';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PageHabilidades: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.back();
  };

  const skills: Skill[] = [
    {
      icon: Code,
      title: 'Desarrollo Frontend de Alto Impacto',
      description: 'Interfaces rápidas, elegantes y responsivas con React, Next.js y TailwindCSS. Experiencia de usuario optimizada para web y móvil.'
    },
    {
      icon: Layout,
      title: 'Diseño UI/UX Centrado en el Usuario',
      description: 'Experiencias intuitivas diseñadas con Figma y principios sólidos de usabilidad. Del prototipo a la implementación sin perder detalle.'
    },
    {
      icon: Rocket,
      title: 'Rendimiento Optimizado al Milisegundo',
      description: 'Aplicaciones que cargan en tiempo récord gracias a optimización de consultas, lazy loading y arquitectura ligera.'
    },
    {
      icon: Database,
      title: 'Backend y Arquitectura de Datos Sólida',
      description: 'Desarrollo robusto con .NET Core (C#) y Spring Boot (Java). Modelado y administración de datos en PostgreSQL con alto rendimiento y seguridad.'
    },
    {
      icon: Cloud,
      title: 'Despliegue en la Nube sin Fricción',
      description: 'Automatización CI/CD y despliegues en AWS, Azure y Docker. Escalabilidad y disponibilidad garantizadas para tu aplicación.'
    },
    {
      icon: GitBranch,
      title: 'Control de Versiones Impecable',
      description: 'Flujos de trabajo claros con Git, ramas bien gestionadas y commits descriptivos que facilitan la colaboración.'
    },
    {
      icon: Brain,
      title: 'Resolución Creativa de Problemas',
      description: 'Capacidad para encontrar soluciones técnicas innovadoras combinando experiencia en múltiples stacks y arquitecturas.'
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad Web Blindada',
      description: 'Implementación de prácticas OWASP, encriptación y protección contra amenazas comunes. Tu sistema y datos, siempre seguros.'
    }
  ];


  return (
    <>
      <TransitionPage />
      <CoverParticle />

      <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleBackToHome}
          className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-blue-400 hover:scale-105 transition-all duration-300 z-50" // <-- Agrega 'z-50' aquí
        >
          <HiMiniArrowLeftStartOnRectangle size={28} />
          <span className="hidden sm:inline">Volver al inicio</span>
        </button>

        <FloatingElements />

        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            // Se ha ajustado el degradado del título para que sea legible sobre el fondo oscuro.
            className="text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
          >
            Mis Habilidades: Donde la Magia Sucede
          </motion.h1>

          <motion.p
            // Se ha cambiado el color del texto para que sea legible sobre el fondo oscuro.
            className="text-2xl text-gray-200 text-center mb-16 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Si pensabas que lo anterior era bueno, prepárate. Esto es lo que pasa cuando un genio se aburre y decide elevar el estándar. No es solo código, es una experiencia.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                // Se ajustó el delay para que la animación de cada tarjeta aparezca secuencialmente.
                delay={0 + index * 0}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: skills.length * 0.1 + 1.0, duration: 0.8 }}
          >
            <p className="text-gray-400 text-xl font-medium ">
              ¿Todavía no estás impresionado? Quizás deberías revisar tu conexión a internet... o tu sentido del humor.
            </p>
            <p className="text-gray-500 text-lg mt-2 mb-8">
              (O tal vez solo necesitas más café. Yo no juzgo.)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default PageHabilidades;
