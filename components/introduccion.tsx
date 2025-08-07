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
                        className='w-60'
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

                    <p className='font-normal pb-5'>
                        Convierto ideas en <span className='text-violet-700 font-bold'>soluciones digitales full-stack</span> que impulsan tu negocio.
                        Desarrollo plataformas y aplicaciones que no solo se ven bien, sino que integran
                        <span className='text-violet-700 font-bold'>inteligencia artificial</span> para automatizar procesos clave,
                        analizar datos y darte una <span className='text-violet-700 font-bold'>ventaja competitiva real</span>.
                        Mi objetivo es crear experiencias digitales completas que generen resultados concretos.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 pt-5 xl:pt-0">
                        {/* Botones como enlaces con estilos directos */}
                        <Link
                            href="portfolio"
                            className="bg-darkBg text-violet-700 px-3 py-1 transition-all border-2 border-violet-700 text-md w-fit rounded-3xl hover:shadow-xl hover:shadow-violet-700"
                        >
                            Ver Proyectos
                        </Link>
                        <Link
                            href="contacto"
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