import Lottie from "react-lottie-player";
import Transition from "./transition";

const TestimonioImg = () => {
    return (
        <Transition position="bottom" className="bottom-0 right-3 hidden md:inline-block md:absolute">
            <Lottie
                loop
                path="/student.json"
                play
                style={{ width: 300, height: 300 }}
                className="flex items-center justify-center"
            />
        </Transition>
    );
}

export default TestimonioImg;