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
            <CoverParticle />
            <TransitionPage />
            <Container>
                <Avatar />
                <h1 className="text-3xl leading-tight text-center md:text-4xl pt-15 xl:pt-0">
                    Mi viaje como desarrollador
                    <span className="font-bold text-violet-700"> full stack y especialista en IA</span>
                </h1>
                <CounterServices />
                <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row">
                    <Link href="/sobre-mi" passHref>
                        <Button className="px-5 py-2.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition w-full sm:w-auto">
                            Sobre Mí
                        </Button>
                    </Link>
                    <Link href="/habilidades" passHref>
                        <Button className="px-5 py-2.5 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition w-full sm:w-auto">
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