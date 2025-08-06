'use client'

import Image from "next/image";
import Transition from "./transition";

const Portafolio = () => {
    return (
        <Transition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src='/logo.png' width={300} height={300} className="w-full h-full" alt="avatar" />
        </Transition>

    );
}

export default Portafolio;