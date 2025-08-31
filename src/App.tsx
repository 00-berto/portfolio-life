import './index.css'
import Earth from "./components/Earth.tsx";
import GithubIcon from "./components/icons/GithubIcon.tsx";
import InstagramIcon from "./components/icons/InstagramIcon.tsx";
import SpotifyIcon from "./components/icons/SpotifyIcon.tsx";
import { Link } from "react-router";
// import { CameraIcon, ScrollTextIcon } from "lucide-react";

export default function App() {
  return (
      <div className="flex flex-col gap-3 py-16 justify-center items-center h-dvh w-screen relative overflow-hidden">
          <div className="size-full">
            <Earth />
          </div>
          <div className="flex items-center justify-center flex-col sm:gap-0 gap-3">
              <div className="text-3xl font-black font-mono tracking-tighter">
                  berto
              </div>
              <div className="sm:block hidden text-xl font-black text-[#999999] font-mono tracking-tighter">
                  life™
              </div>

              <div className="sm:hidden flex">
                  <Links/>
              </div>
          </div>

          <div className="sm:flex hidden absolute bottom-3 left-3">
              <Links/>
          </div>

          {/*<div className="absolute top-3 right-3 left-3 flex flex-row justify-between">*/}
          {/*    <Link to={"/blog"} className={"flex flex-row gap-2 text-lg font-mono tracking-tighter hover:underline"}>*/}
          {/*        <CameraIcon className={"size-7 transition-all ease-out duration-75"}/>*/}
          {/*        pics*/}
          {/*    </Link>*/}

          {/*    <Link to={"/blog"} className={"flex flex-row gap-2 text-lg font-mono tracking-tighter hover:underline"}>*/}
          {/*        blog*/}
          {/*        <ScrollTextIcon className={"size-7 transition-all ease-out duration-75"}/>*/}
          {/*    </Link>*/}
          {/*</div>*/}
      </div>
  )
}

function Links() {
    return (
        <div className="flex flex-row gap-3 items-center justify-center">
            <Link to={"https://github.com/00-berto"} target={"_blank"}>
                <GithubIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
            </Link>
            <Link to={"https://instagram.com/albertocornacchia_"} target={"_blank"}>
                <InstagramIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
            </Link>
            <Link to={"https://open.spotify.com/user/31f2s2nnbfnjtab5cr77ofnwvdna?si=8d29e6b79c164b3a"} target={"_blank"}>
                <SpotifyIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
            </Link>
        </div>
    )
}
