'use client'

import Transition from "./transition";
import Lottie from "react-lottie-player";

const Avatar = () => {
    return (
        <Transition
            position="bottom"
            className="bottom-0 right-0 hidden md:inline-block md:absolute "
        >
            <Lottie
                loop
                path="/Developer.json"
                play
                style={{ width: 400, height: 400 }}
                className="flex items-center justify-center"
            />
        </Transition>
    );
}

export default Avatar;