import { Link } from "react-router";
import { ChevronLeftIcon } from "lucide-react";

export default function Blog() {
    return (
        <div className={"min-h-screen min-w-screen flex"}>
            <div className={"font-mono tracking-tighter p-5 flex flex-col gap-3 w-auto"}>
                <>
                    <Link to={"/"} className="text-lg font-black text-[#33A1E0] flex flex-row gap-1 items-center hover:text-[#2A7DAC] transition-all ease-out duration-75">
                        <ChevronLeftIcon className={"size-6 stroke-3"}/>
                        go back
                    </Link>
                    <div className={"text-2xl font-black"}>blog</div>
                    <Link to={"/blog/philosophy"} className={"text-base"}>philosophy</Link>
                </>
            </div>
        </div>
    )
}