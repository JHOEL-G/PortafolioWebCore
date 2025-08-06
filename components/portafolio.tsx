import Image from "next/image"
import Link from "next/link"

interface InfoPortafolioProps {
    data: {
        id: number
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const InfoPortafolio = (props: InfoPortafolioProps) => {
    const { data } = props
    const { title, image, urlGithub, urlDemo } = data

    return (
        <div className="p-10 border border-white-400 rounded-4xl flex flex-col h-[400px] overflow-hidden">
            <h3 className="p-0 text-xl">
                {title}
            </h3>
            <div className="flex-grow my-5">
                <Image src={image} alt="image" width={200} height={200} className="w-full h-full rounded-3xl object-cover" />
            </div>
            <div className="flex gap-6 items-center justify-center mt-auto">
                <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-violet-500 hover:bg-violet-800">GIT HUB</Link>
                <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-red-400 hover:bg-red-800">LIVE DEMO</Link>
            </div>
        </div>
    );
}

export default InfoPortafolio;