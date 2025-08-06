"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";

const Introduccion = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-1 py-30 md:py-1 md:grid-cols-2">
                <Image src="/logo.png" priority width="800" height="800" alt="logo" className="pr-10" />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-8 text-2xl leading-tight text-center md:text-left">
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
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-violet-700"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 ">
                        Convierto ideas en <span className="text-violet-700"> soluciones digitales </span> a medida que impulsan tu negocio. Construyo sitios web que no solo lucen bien, sino que también generan resultados. Mi especialidad es crear <span className="text-violet-700">experiencias digitales completas</span> y herramientas inteligentes para automatizar tus procesos y darte una <span className="text-violet-700">ventaja competitiva</span>.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link
                            href="/proyecto"
                            className="px-3 py-1 transition-all border-2 cursor-pointer border-violet-700 text-md w-fit rounded-3xl hover:shadow-xl hover:shadow-violet-700"
                        >
                            <Button className="text-violet-700 bg-darkBg">Ver Proyectos</Button>
                        </Link>

                        <Link
                            href="/contacto"
                            className="px-3 py-1 transition-all border-2 cursor-pointer text-red-700 border-red-700 text-md w-fit rounded-3xl hover:shadow-xl hover:shadow-red-700"
                        >
                            <Button className="text-red-700 bg-darkBg">
                                Contacta Conmigo
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduccion;