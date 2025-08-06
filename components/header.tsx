import Link from "next/link";
import Transition from "./transition";
import { socialNetworks } from "@/data";
import Image from "next/image";

const Header = () => {
    return (
        <>
            <Transition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
                <header>
                    <div className="container justify-between max-w-6xl mx-auto md:flex">
                        <Link href='/'>
                            <h1 className="my-3 text-4xl font-bold text-center md:text-left ">
                                Ingeniero de software
                                <span className="text-violet-700 pl-5">
                                    full stack.
                                </span>
                            </h1>
                        </Link>
                        <div className="flex items-center justify-center gap-9">
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