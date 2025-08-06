'use client'

import Image from "next/image";
import Transition from "./transition";

const Avatar = () => {
    return (
        <Transition
            position="bottom"
            className="bottom-0 right-0 hidden md:inline-block md:absolute "
        >
            <Image
                src="/logo.png"
                width={350}
                height={350}
                alt="avatar"
                className="w-full h-full"
            />
        </Transition>
    );
}

export default Avatar;