"use client";

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Transition from "./transition";

const Navbar = () => {
    const router = usePathname();
    return (
        <Transition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10 ">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-transparent  backdrop-blur-sm border">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-red-800 ${router === item.link && "bg-red-800"
                                }`}
                        >
                            <Link href={item.link}>{item.icon}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </Transition>
    );
};

export default Navbar;
