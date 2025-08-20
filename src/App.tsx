import './index.css'
import Earth from "./components/Earth.tsx";
import GithubIcon from "./components/icons/GithubIcon.tsx";
import InstagramIcon from "./components/icons/InstagramIcon.tsx";
import SpotifyIcon from "./components/icons/SpotifyIcon.tsx";

export default function App() {
  return (
      <div className="flex justify-center items-center h-dvh w-screen relative">
          <Earth />
          <div className="absolute bottom-16 left-0 right-0 flex items-center justify-center flex-col sm:gap-0 gap-3">
              <div className="text-3xl font-black font-mono tracking-tighter">
                  berto
              </div>
              <div className="sm:block hidden text-xl font-black text-[#999999] font-mono tracking-tighter">
                  life™
              </div>

              <div className="sm:hidden flex flex-row gap-3 items-center justify-center">
                  <a href={"https://github.com/00-berto"} target={"_blank"}>
                      <GithubIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
                  </a>
                  <a href={"https://instagram.com/albertocornacchia_"} target={"_blank"}>
                      <InstagramIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
                  </a>
                  <a href={"https://open.spotify.com/user/31f2s2nnbfnjtab5cr77ofnwvdna?si=8d29e6b79c164b3a"} target={"_blank"}>
                      <SpotifyIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
                  </a>
              </div>
          </div>

          <div className="absolute bottom-3 left-3 sm:flex hidden flex-row gap-3 items-center justify-start">
              <a href={"https://github.com/00-berto"} target={"_blank"}>
                  <GithubIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
              </a>
              <a href={"https://instagram.com/albertocornacchia_"} target={"_blank"}>
                  <InstagramIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
              </a>
              <a href={"https://open.spotify.com/user/31f2s2nnbfnjtab5cr77ofnwvdna?si=8d29e6b79c164b3a"} target={"_blank"}>
                  <SpotifyIcon className={"size-7 hover:text-[#999999] transition-all ease-out duration-75"}/>
              </a>
          </div>
      </div>
  )
}
