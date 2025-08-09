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
                            <div className="text-3xl font-bold text-center md:text-left">
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
                                    className="font-bold text-violet-700 block text-center text-xl sm:text-4xl md:text-4xl xl:text-4xl"
                                />
                            </div>

                        </Link>
                        <div className="flex items-center justify-center gap-7 pb-10 pt-6 xl:pt-2">
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
                <div className="fixed bottom-6 right-6 z-50 sm:pb-10 md:pb-10 pb-25 xl:pb-3 xl:pr-2">
                    <Link
                        href="https://wa.me/951072293"
                        target="_blank"
                        className="group block"
                    >
                        <div className="relative h-14 w-14 rounded-full bg-green-500 shadow-xl transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:shadow-2xl">
                            <Image
                                src="/whatsapp.png"
                                height={56}
                                width={56}
                                alt="WhatsApp"
                                className="absolute inset-0 m-auto"
                            />
                        </div>
                    </Link>
                </div>
            </Transition>
        </>
    );
}

export default Header;