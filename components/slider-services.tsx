'use client'

import { serviceData } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ServicesSlider = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className=" h-[340px] md:h-[400px] w-[290px] md:w-[700px] mb-20 xl:mb-0"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col h-full w-full px-6 py-8 rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2 ">
                        <div className="mb-4 text-4xl text-violet-700">{item.icon}</div>
                        <div>
                            <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ServicesSlider;