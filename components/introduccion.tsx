"use client";

import Lottie from 'react-lottie-player';
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduccion = () => {
    return (
        <section className="z-10 w-full bg-darkBg/60 bottom-auto">
            <div className="z-20 grid items-center p-4 py-6 md:grid-cols-2 justify-center pt-30 xl:pt-0">
                {/* Contenedor con aria-label para accesibilidad */}
                <div role="img" aria-label="Animación de desarrollo web con un programador y código." className="flex items-center justify-center p-1 w-90 mx-auto">
                    <Lottie
                        loop
                        path="/Web_Development.json"
                        play
                    />
                </div>

                <div className="flex flex-col justify-center max-w-md ">
                    <h1 className="mb-4 text-2xl leading-tight text-center md:text-left sm:pt-10 xl:pt-0">
                        SI PUEDES IMAGINARLO, <br />
                        <TypeAnimation
                            sequence={[
                                "PODEMOS DISEÑARLO",
                                2000,
                                "PODEMOS EJECUTARLO",
                                2000,
                                "PUEDES OPTIMIZARLO",
                                2000,
                                "PUEDES PROGRAMARLO",
                                2000,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                            className="font-bold text-violet-700"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 lg:text-start">
                        Convierto ideas en <span className="text-violet-700">soluciones digitales</span> a medida que impulsan tu negocio. Construyo sitios web que no solo lucen bien, sino que también generan resultados. Mi especialidad es crear <span className="text-violet-700">experiencias digitales completas</span> y herramientas inteligentes para automatizar tus procesos y darte una <span className="text-violet-700">ventaja competitiva</span>.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        {/* Botones como enlaces con estilos directos */}
                        <Link
                            href="/proyecto"
                            className="bg-darkBg text-violet-700 px-3 py-1 transition-all border-2 border-violet-700 text-md w-fit rounded-3xl hover:shadow-xl hover:shadow-violet-700"
                        >
                            Ver Proyectos
                        </Link>
                        <Link
                            href="/contacto"
                            className="bg-darkBg text-red-700 px-3 py-1 transition-all border-2 border-red-700 text-md w-fit rounded-3xl hover:shadow-xl hover:shadow-red-700"
                        >
                            Contacta Conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduccion;