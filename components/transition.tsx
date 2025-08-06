'use client';

import { fedeIn } from "@/utils/motion-transition";
import { motion } from "framer-motion";

interface TransitionProps {
    children: React.ReactNode;
    position: "bottom" | "right";
    className?: string;
}

const Transition = (props: TransitionProps) => {
    const { children, position, className } = props;

    return (
        <motion.div
            variants={fedeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>

    );
};

export default Transition;
