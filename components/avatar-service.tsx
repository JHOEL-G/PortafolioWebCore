'use client'

import Transition from "./transition";
import Lottie from "react-lottie-player";

const AvatarService = () => {
    return (
        <>
            <Transition position="right" className="bottom-0 left-0 hidden md:inline-block absolute">
                <Lottie
                    loop
                    path="/development.json"
                    play
                    style={{ width: 300, height: 300 }}
                    className="flex items-center justify-center"
                />
            </Transition>
            <Transition position="right" className="bottom-0 right-10 hidden md:inline-block absolute ">
                <Lottie
                    loop
                    path="/custom-development.json"
                    play
                    style={{ width: 300, height: 300 }}
                    className="flex items-center justify-center pt-15"
                />
            </Transition>
        </>
    );
}

export default AvatarService;