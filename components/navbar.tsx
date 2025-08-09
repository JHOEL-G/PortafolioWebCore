'use client'

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Transition from "./transition";

const Navbar = () => {
    const router = usePathname();
    return (
        <Transition
            position="right"
            className="fixed bottom-10 z-50 mt-auto flex h-max w-full flex-col items-center justify-center"
        >
            <nav>
                <div className="flex items-center justify-center gap-2 rounded-full border bg-transparent px-4 py-1 backdrop-blur-sm">
                    {itemsNavbar.map((item) => (
                        <Link key={item.id} href={item.link}>
                            <div
                                className={`cursor-pointer rounded-full px-3 py-2 transition duration-150 hover:bg-red-800 ${router === item.link && "bg-red-800"
                                    }`}
                            >
                                {item.icon}
                            </div>
                        </Link>
                    ))}
                </div>
            </nav>
        </Transition>
    );
};

export default Navbar;
