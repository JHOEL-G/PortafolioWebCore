'use client';


import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
    return (
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-1 mx-auto my-10 md:grid-cols-4 md:gap-6">
            {dataCounter.map(
                ({ id, endCounter, text }) => (
                    <div key={id}>
                        <div className={`px-6
                            ${id < dataCounter.length - 1 ? 'border-r border-gray-100' : ''} 
                        `}>
                            <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-violet-700"> +
                                <CountUp end={endCounter} start={0} duration={3} />
                            </p>
                            <p className="text-sm uppercase max-w-[180px] ">{text}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default CounterServices;