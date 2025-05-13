import { Shareicon } from "../icons/Shareicon";


interface CardProps {
    title: string;
    link: string;
    type: "Youtube" | "Twitter";
    description: string;
}

export function Card({ title, link, type, description }: CardProps) {
    return <div>
    <div className="p-6 bg-white rounded-md shadow-md max-w-72 border-slate-200 border min-w-72 min-h-48">
        <div className="flex justify-between">
            <div className="flex items-center">
                <div className="pr-2 text-gray-500"><Shareicon /></div>
                {title}

            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <a href={link}target= "_blank">
                    <Shareicon />
                    </a>
                </div>
                <div className="text-gray-500">
                    <Shareicon />
                </div>
            </div>

        </div>
        <div className="pt-4">
            {type === "Youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {/* <iframe className="w-full" src="https://www.youtube.com/embed/VwD7kWvgAH4?si=gN_CUKOT0OZzbkoB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
            {type === "Twitter" &&
                <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}
            {description}
        </div>
    </div>
    </div>
}