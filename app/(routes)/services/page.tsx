import AvatarService from "@/components/avatar-service";
import { CoverParticle } from "@/components/cover-particle";
import ServicesSlider from "@/components/slider-services";
import TransitionPage from "@/components/transitionpage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
    return (
        <>
            <TransitionPage />
            <CoverParticle />
            <AvatarService />
            <div className="min-h-screen flex items-center justify-center py-10 md:py-0 ">
                <div className="grid h-full max-w-5xl gap-6 mx-auto md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2  md:items-center lg:pb-50 pt-45 xl:p-0 ">
                    <div className="max-w-[450px] mx-auto xl:mx-0">
                        <h1 className="text-2xl leading-tight text-center md:text-center md:text-4xl md:mb-5 lg:text-center xl:text-start">
                            Nuestros
                            <span className="font-bold text-violet-700 pl-3">
                                Servicios
                            </span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300 text-center xl:text-left p-3">
                            Ofrezco soluciones digitales integrales, desde la conceptualización hasta el lanzamiento. Como especialista full stack con IA, combino un desarrollo robusto con una funcionalidad inteligente para crear aplicaciones web que no solo satisfacen, sino que superan las expectativas de mis clientes.
                        </p>
                        <div className="flex justify-center xl:justify-start xl:pl-5 ">
                            <Link
                                href="contacto"
                                className="bg-darkBg text-violet-700 px-3 py-1 transition-all border-2 border-violet-700 text-md w-fit rounded-3xl hover:shadow-xl hover:shadow-violet-700"

                            >
                                Contacta conmigo
                            </Link>
                        </div>
                    </div>
                    <div className="pb-15">
                        <ServicesSlider />
                    </div>
                </div>
            </div >
        </>
    );
};

export default Services;