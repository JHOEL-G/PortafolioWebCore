'use client'

import CirculoImg from "@/components/circulo-img";
import { CoverParticle } from "@/components/cover-particle";
import TestimonioImg from "@/components/testionioimg";
import TransitionPage from "@/components/transitionpage";
import { dataTestimonials } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
    return (
        <>
            <CoverParticle />
            <TransitionPage />
            <div className="flex flex-col justify-center h-full min-h-screen py-10 mt-20 xl:mt-4">
                <CirculoImg />
                <TestimonioImg />
                <h1 className="text-3xl leading-tight text-center md:text-4xl mb-8">
                    LOS COMENTARIOS
                    <span className="block font-bold text-violet-700">
                        DE LOS CLIENTES SATISFECHOS
                    </span>
                </h1>

                <div className="flex items-center justify-center">
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
                        className="h-[380px] md:h-[300px] w-full max-w-sm md:max-w-xl"
                    >
                        {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                            <SwiperSlide key={id}>
                                <Image
                                    src={imageUrl}
                                    alt={`Foto de ${name}`}
                                    width={100}
                                    height={100}
                                    className="mx-auto flex items-center justify-center rounded-full"
                                />
                                <h4 className="text-center font-bold text-lg mt-4">{name}</h4>
                                <p className="mt-5 text-center px-4">{description}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-center mt-5">
                    <Link
                        href="/contacto"
                        className="bg-violet-700 text-white px-5 py-2.5 rounded-full text-lg font-semibold shadow-lg hover:bg-violet-800 transition-colors duration-300"
                    >
                        Comienza tu proyecto
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Testimonials;