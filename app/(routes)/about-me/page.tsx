"use client"

import Avatar from "@/components/avatar";
import Container from "@/components/container";
import CounterServices from "@/components/counter-services";
import { CoverParticle } from "@/components/cover-particle";
import Linea from "@/components/linea";
import TransitionPage from "@/components/transitionpage";

const AboutMe = () => {
    return (
        <>
            < CoverParticle />

            <TransitionPage />
            <Container>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl pt-15 xl:pt-0 md:mt-10 xl:text-center  ">
                    Mi viaje como desarrollador
                    <span className="font-bold text-violet-700"> full stack y especialista en IA</span>
                </h1>


                <CounterServices />

                <Linea />

            </Container>
        </>
    );
}

export default AboutMe;