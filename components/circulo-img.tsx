'use client'

import Lottie from "react-lottie-player";

const CirculoImg = () => {
    return (
        <div className="bottom-0 left-0 hidden md:inline-block md:absolute pl-5 ">
            <Lottie
                loop
                path="/Programming Effects.json"
                play
                style={{ width: 300, height: 300 }}
                className="flex items-center justify-center "
            />
        </div>
    );
}

export default CirculoImg;