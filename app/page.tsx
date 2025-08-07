import Badge3D from "@/components/Badge3D";
import { CoverParticle } from "@/components/cover-particle";
import Introduccion from "@/components/introduccion";
import TransitionPage from "@/components/transitionpage";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-4 py-8 bg-no-repeat bg-gradient-cover overflow-hidden">

        <div className="absolute inset-0 z-0">
          <CoverParticle />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-12 lg:space-y-0 lg:space-x-0 max-w-1xl w-full mx-auto pt-15 xl:pt-0 ">
          <div className="w-full xl:pt-40 pl-0">
            <Introduccion />
          </div>

          <div className="w-full h-[100vh] flex justify-center items-center xl:h-[85vh] xl:flex-9/13">
            <Badge3D />
          </div>
        </div>
      </div>
    </main>
  );
}
