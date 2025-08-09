'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedSkillCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay: number;
}

const AnimatedSkillCard: React.FC<AnimatedSkillCardProps> = ({ icon: Icon, title, description, delay }) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    const gradientVariants: Variants = {
        initial: { x: '-100%', y: '-100%' },
        hover: { x: '0%', y: '0%' }
    };

    return (
        <motion.div
            className="relative bg-gray-800/70 from-gray-800/70 to-blue-600 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border  border-gray-700/50 overflow-hidden group cursor-pointer text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        >
            {/* Fondo degradado animado */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                variants={gradientVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    // Ajuste de colores para el tema oscuro
                    className="p-5 bg-gray-700/50 rounded-full mb-6 shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
                >
                    <Icon className="w-12 h-12 text-blue-400 group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-200 mb-3 group-hover:text-white transition-all duration-500">{title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">{description}</p>
            </div>
        </motion.div>
    );
};

export default AnimatedSkillCard;
