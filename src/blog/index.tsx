import { Link } from "react-router";
import { ChevronLeftIcon } from "lucide-react";

export default function Blog() {
    const pages: { id: string, name: string }[] = [
        {
            id: "philosophy",
            name: "philosophy"
        },
        {
            id: "31-08-25",
            name: "31-08-25"
        },
    ]


    return (
        <div className={"min-h-screen min-w-screen flex bg-white"}>
            <div className={"font-mono tracking-tighter p-5 flex flex-col gap-3 w-auto"}>
                <>
                    <Link to={"/"} className="text-lg font-black text-[#33A1E0] flex flex-row gap-1 items-center hover:underline transition-all ease-out duration-75">
                        <ChevronLeftIcon className={"size-6 stroke-3"}/>
                        torna indietro
                    </Link>
                    <div className={"text-2xl font-black"}>blog</div>
                    <div className="flex flex-col gap-2">
                        {pages.map((page) => (
                            <div>
                                <Link to={`/blog/${page.id}`} className={"text-base hover:underline w-auto"}>{page.name}</Link>
                            </div>
                        ))}
                    </div>
                </>
            </div>
        </div>
    )
}