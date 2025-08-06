export const transitionVariantsPage = {
    initial: {
        x: '100%',
        width: '100%',
    },
    animate: {
        x: '0%',
        width: '0%',
    },
    exit: {
        x: ['100%', '0%'],
        width: ['0%', '100%'],
    }
}

import { Variants } from "framer-motion";

export const fedeIn = (position: "bottom" | "right"): Variants => {
    return {
        hidden: {
            y: position === "bottom" ? -80 : 0,
            x: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: "easeInOut",
            },
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: "easeInOut",
            },
        },
    };
};
