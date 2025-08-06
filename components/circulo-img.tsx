'use client'

import Image from "next/image";

const CirculoImg = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src='/logo.png' width={200} height={200} alt="circulo" className="w-full h-full" />
        </div>
    );
}

export default CirculoImg;