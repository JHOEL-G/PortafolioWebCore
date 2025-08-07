import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from 'react-icons/fi';

interface InfoPortafolioProps {
    data: {
        id: number;
        title: string;
        image: string;
        description?: string;
        tags?: string[];
        status?: string; // opcional: "In Progress", etc.
        urlGithub: string;
        urlDemo: string;
    };
}

const InfoPortafolio = (props: InfoPortafolioProps) => {
    const { data } = props;
    const { title, image, description, tags = [], status, urlGithub, urlDemo } = data;

    return (
        <div className="bg-zinc-900 rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
            {/* Contenedor de la imagen */}
            <div className="relative w-full aspect-video">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-t-xl"
                />
            </div>

            {/* Contenedor de contenido - flex-grow es la clave */}
            <div className="p-4 flex flex-col flex-grow">
                {status && (
                    <span className="text-xs text-white font-semibold bg-red-600 px-2 py-1 rounded-md inline-block mb-2 w-fit">
                        {status}
                    </span>
                )}

                <h3 className="text-white text-xl font-bold mb-2">{title}</h3>

                <div className="flex flex-col flex-grow">
                    {description && <p className="text-sm text-gray-400 mb-3">{description}</p>}

                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {tags.map((tag, idx) => (
                                <span key={idx} className="bg-violet-700 text-white text-xs px-2 py-1 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Este div empuja los botones hacia abajo */}
                <div className="mt-auto">
                    <div className="flex gap-4 mt-4">
                        <Link
                            href={urlGithub}
                            target="_blank"
                            className="flex-1 text-center text-sm font-semibold p-2 rounded-lg bg-violet-600 hover:bg-violet-800 transition inline-flex items-center justify-center gap-2"
                        >
                            <FaGithub />
                            GitHub
                        </Link>
                        <Link
                            href={urlDemo}
                            target="_blank"
                            className="flex-1 text-center text-sm font-semibold p-2 rounded-lg bg-rose-500 hover:bg-rose-800 transition inline-flex items-center justify-center gap-2"
                        >
                            <FiExternalLink />
                            Live Demo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoPortafolio;