'use client'

import React from 'react';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import FloatingElements from './components/FloatingElements';
import TransitionPage from '@/components/transitionpage';
import { CoverParticle } from '@/components/cover-particle';

const PageContacto = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br relative overflow-hidden pb-10 xl:pb-0">
            <FloatingElements />

            <div className="relative z-10 min-h-screen flex items-center">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </div>
            <TransitionPage />
            <CoverParticle />

        </div>
    );
};

export default PageContacto;