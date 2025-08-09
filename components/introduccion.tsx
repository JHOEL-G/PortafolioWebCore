"use client";

import Lottie from 'react-lottie-player';
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduccion = () => {
    return (
        <section className="z-10 w-full bg-darkBg/60 pt-8 xl:pt-0 ">
            <div className="z-20 grid items-center px-4 py-8 md:grid-cols-2 justify-center gap-12 pt-20 md:pt-16 xl:pt-0">
                {/* Contenedor con aria-label para accesibilidad */}
                <div role="img" aria-label="Animación de desarrollo web con un programador y código." className="flex items-center justify-center w-full max-w-sm mx-auto md:w-60">
                    <Lottie
                        loop
                        path="/Web_Development.json"
                        play
                        className='w-full max-w-xs h-auto'
                    />
                </div>

                <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0">
                    <h1 className="mb-4 text-3xl leading-tight text-center md:text-left pt-8 md:pt-0">
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

                    <p className='font-normal  text-center md:text-left'>
                        Convierto ideas en <span className='text-violet-700 font-bold'>soluciones digitales full-stack</span> que impulsan tu negocio.
                        Desarrollo plataformas y aplicaciones que no solo se ven bien, sino que integran
                        <span className='text-violet-700 font-bold'> inteligencia artificial</span> para automatizar procesos clave,
                        analizar datos y darte una <span className='text-violet-700 font-bold'>ventaja competitiva real</span>.
                        Mi objetivo es crear experiencias digitales completas que generen resultados concretos.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start pt-4">
                        <Link
                            href="portfolio"
                            className="bg-darkBg text-violet-700 px-3 py-2 transition-all border-2 border-violet-700 text-lg w-full md:w-auto rounded-full hover:shadow-xl hover:shadow-violet-700 text-center"
                        >
                            Ver Proyectos
                        </Link>
                        <Link
                            href="contacto"
                            className="bg-darkBg text-red-700 px-3 py-2 transition-all border-2 border-red-700 text-lg w-full md:w-auto rounded-full hover:shadow-xl hover:shadow-red-700 text-center"
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