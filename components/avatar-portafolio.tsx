'use client'

import Transition from "./transition";
import Lottie from "react-lottie-player";

const Portafolio = () => {
    return (
        <Transition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Lottie
                loop
                path="/development.json"
                play
                style={{ width: 300, height: 300 }}
                className="flex items-center justify-center"
            />
        </Transition>

    );
}

export default Portafolio;