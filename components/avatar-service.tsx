import Image from "next/image";
import Transition from "./transition";

const AvatarService = () => {
    return (
        <Transition position="right" className="bottom-0 left-0 hidden md:inline-block md: absolute">
            <Image src='/logo.png' width={300} height={300} className="w-[350px] h-full" alt="avatar" />
        </Transition>
    );
}

export default AvatarService;