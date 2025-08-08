'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import FloatingElements from './components/FloatingElements';
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import TransitionPage from '@/components/transitionpage';
import { CoverParticle } from '@/components/cover-particle';

const PageContacto = () => {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/');
    };

    return (
        <>
            <TransitionPage />
            <CoverParticle />
            <div className="min-h-screen bg-gradient-to-br relative overflow-hidden pb-10 xl:pb-0">

                <button
                    onClick={handleBackToHome}
                    className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-blue-400 hover:scale-105 transition-all duration-300 z-50" // <-- Agrega 'z-50' aquí
                >
                    <HiMiniArrowLeftStartOnRectangle size={28} />
                    <span className="hidden sm:inline">Volver al inicio</span>
                </button>

                <FloatingElements />

                <div className="relative z-10 min-h-screen flex items-center">
                    <div className="container mx-auto px-6 py-16">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                            <ContactInfo />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageContacto;