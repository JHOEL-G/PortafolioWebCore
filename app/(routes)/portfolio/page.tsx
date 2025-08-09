import Container from "@/components/container";
import { CoverParticle } from "@/components/cover-particle";
import InfoPortafolio from "@/components/portafolio";
import TransitionPage from "@/components/transitionpage";
import { dataPortfolio } from "@/data";

const Portfolio = () => {
    return (
        <Container>
            <TransitionPage />
            <CoverParticle />
            <div className="flex flex-col justify-center h-full py-12 xl:py-0 px-4 md:px-0">
                <h1 className="text-3xl leading-tight text-center md:text-4xl md:mb-5">
                    Proyectos
                    <span className="text-violet-700 font-bold pl-3">
                        destacados
                    </span>
                </h1>
                <div className="relative z-10 grid max-w-5xl gap-7 mx-auto mt-5 sm:grid-cols-2 lg:grid-cols-3">
                    {dataPortfolio.map((data) => (
                        <InfoPortafolio key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Portfolio;