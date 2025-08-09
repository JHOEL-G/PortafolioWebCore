'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code, Briefcase, Lightbulb, Star } from 'lucide-react';
import { CoverParticle } from '@/components/cover-particle';
import TransitionPage from '@/components/transitionpage';
import { FaReact } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { SiSpring } from 'react-icons/si';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { HiMiniArrowLeftStartOnRectangle } from 'react-icons/hi2';
import FloatingElements from '../contacto/components/FloatingElements';

const PageSobre: React.FC = () => {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/about-me');
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <TransitionPage />
            <CoverParticle />
            <div className="flex justify-center items-center min-h-screen p-10 bg-gray-950 ">
                <div className='pt-7'>
                    <button
                        onClick={handleBackToHome}
                        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-blue-400 hover:scale-105 transition-all duration-300 z-50" // <-- Agrega 'z-50' aquí
                    >
                        <HiMiniArrowLeftStartOnRectangle size={28} />
                        <span className="hidden sm:inline">Volver al inicio</span>
                    </button>

                    <FloatingElements />
                    <motion.div
                        className="bg-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl w-full text-center mb-14"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                                Sobre Mí
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                ¡Hola! Soy desarrollador de software con 2 años de experiencia creando aplicaciones web rápidas, seguras y atractivas.
                                Me especializo en transformar ideas en soluciones digitales funcionales que generan impacto real para mis clientes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <motion.div
                                className="bg-gray-700/50 p-6 rounded-2xl shadow-md border border-gray-600"
                                variants={itemVariants}
                            >
                                <Code className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                                <h2 className="text-2xl font-bold text-gray-200 mb-2">Habilidades</h2>
                                <p className="text-gray-300">
                                    Combino mis conocimientos en desarrollo frontend con React y TailwindCSS para crear interfaces de usuario modernas y responsivas. En el backend, utilizo C#, .NET Core y Spring Boot para construir sistemas robustos y escalables.
                                </p>
                                <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <FaReact className="w-5 h-5 text-blue-400" />
                                        <span>React</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BiLogoTailwindCss className="w-5 h-5 text-cyan-400" />
                                        <span>TailwindCSS</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <VscAzure className="w-5 h-5 text-blue-500" />
                                        <span>Azure</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <SiDotnet className="w-5 h-5 text-indigo-400" />
                                        <span>C# / .NET Core</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <SiSpring className="w-5 h-5 text-green-400" />
                                        <span>Spring Boot</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-gray-700/50 p-6 rounded-2xl shadow-md border border-gray-600"
                                variants={itemVariants}
                            >
                                <Briefcase className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                                <h2 className="text-2xl font-bold text-gray-200 mb-2">Experiencia</h2>
                                <p className="text-gray-300">
                                    Mi experiencia abarca una variedad de proyectos, desde la creación de sistemas de gestión de inventario y plataformas de e-commerce completas, hasta el desarrollo de portafolios profesionales y sitios web para consultorías empresariales. Me enfoco en entregar soluciones optimizadas y de alto rendimiento que satisfagan las necesidades específicas de cada cliente.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl font-bold text-gray-200 mb-4">Mi Compromiso</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Más que escribir código, mi objetivo es ayudar a mis clientes a ahorrar tiempo, optimizar procesos y potenciar sus resultados,
                                entregando software de alta calidad y fácil mantenimiento.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
                            variants={itemVariants}
                        >
                            <Lightbulb className="w-8 h-8 text-yellow-400" />
                            <p className="text-xl font-semibold text-gray-200 text-center">
                                ¿Listo para dar vida a tu próximo proyecto? ¡Hablemos!
                            </p>
                            <Star className="w-8 h-8 text-yellow-400" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </>
    );
};

export default PageSobre;
