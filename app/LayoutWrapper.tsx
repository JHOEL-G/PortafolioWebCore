// app/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {children}
            <Navbar />
            {pathname !== "/contacto" && <Header />}
        </>
    );
}