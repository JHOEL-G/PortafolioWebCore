"use client"

import Avatar from "@/components/avatar";
import Container from "@/components/container";
import CounterServices from "@/components/counter-services";
import { CoverParticle } from "@/components/cover-particle";
import Linea from "@/components/linea";
import TransitionPage from "@/components/transitionpage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutMe = () => {
    return (
        <>
            < CoverParticle />
            <TransitionPage />
            <Container>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-center md:text-4xl pt-15 xl:pt-0 md:mt-10 xl:text-center md:pt-0">
                    Mi viaje como desarrollador
                    <span className="font-bold text-violet-700"> full stack y especialista en IA</span>
                </h1>
                <CounterServices />
                <div className="flex justify-center gap-4 mt-6">
                    <Link href="/sobre-mi">
                        <Button
                            onClick={() => ('sobre-mi')}
                            className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                        >
                            Sobre Mí
                        </Button>
                    </Link>
                    <Link href="/habilidades">
                        <Button
                            onClick={() => ('habilidades')}
                            className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
                        >
                            Habilidades
                        </Button>
                    </Link>
                </div>
                <Linea />

            </Container>
        </>
    );
}

export default AboutMe;