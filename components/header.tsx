'use client'

import Link from "next/link";
import Transition from "./transition";
import { socialNetworks } from "@/data";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
    return (
        <>
            <Transition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
                <header>
                    <div className="container justify-between max-w-6xl mx-auto md:flex">
                        <Link href='/'>
                            <div className="text-4xl font-bold text-center md:text-left">
                                <h1>Ingeniero de Software</h1>
                                <TypeAnimation
                                    sequence={[
                                        'DEVELOPER',
                                        3000,
                                        'DEV WEB',
                                        3000,
                                        'FULL STACK',
                                        3000,
                                        'CON INTELIGENCIA ARTIFICIAL',
                                        5000,
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    repeat={Infinity}
                                    className="font-bold text-violet-700 block text-center"
                                />
                            </div>

                        </Link>
                        <div className="flex items-center justify-center gap-9 pb-10 pt-4 xl:pt-0">
                            {socialNetworks.map(({ logo, src, id }) => (
                                <Link key={id} href={src} target="_blank" className="transition-all duration-300 hover:text-violet-700">
                                    {logo}
                                </Link>
                            ))}
                        </div>
                    </div>
                </header>
            </Transition>

            <Transition position="bottom">
                <div className="fixed bottom-25 right-3 xl:bottom-7 xl:right-7 z-50">
                    <Link
                        href="https://wa.me/51959779316"
                        target="_blank"
                        className="transition-all duration-300 rounded-full "
                    >
                        <Image
                            src='/whatsapp.png'
                            height={70}
                            width={70}
                            alt="image"
                            className="filter invert sepia-50 hover:filter-none hover:hue-rotate-90 transition-all duration-300"
                        />
                    </Link>
                </div>
            </Transition>
        </>
    );
}

export default Header;