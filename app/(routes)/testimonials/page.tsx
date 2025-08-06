'use client'

import CirculoImg from "@/components/circulo-img";
import { CoverParticle } from "@/components/cover-particle";
import TransitionPage from "@/components/transitionpage";
import { dataTestimonials } from "@/data";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
    return (
        <>
            <CoverParticle />
            <TransitionPage />
            <div className="flex flex-col justify-center h-lvh pt-40 xl:pt-0">
                <CirculoImg />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    LOS COMENTARIO

                    <span className="block font-bold text-violet-700">
                        DE LOS CLIENTES SATISFECHOS
                    </span>
                </h1>

                <div className="flex items-center justify-center">
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                }
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"

                        >
                            {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt={name} width={100} height={100} className="mx-auto rounded-full pt-10" />
                                    <h4 className="text-center">{name}</h4>
                                    <p className="mt-5 text-center">{description}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Testimonials;