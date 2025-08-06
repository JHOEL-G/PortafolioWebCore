"use client";

import { transitionVariantsPage } from "@/utils/motion-transition";
import { AnimatePresence, motion } from "motion/react";

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#120b2a]"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;