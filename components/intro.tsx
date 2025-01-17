import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Avatar from "../public/avatar.jpg"; // this is the proper way to display this image on Github Pages

const Intro = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start justify-evenly">
      <div className="flex flex-col pr-12">
        <Link href="/">
          <a className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">
            Howard Zhong
          </a>
        </Link>
        <h2 className="text-gray-700 mb-4">
          Research SWE at <span className="font-semibold">CHTC</span>, MSCS at{" "}
          <span className="font-semibold">UW-Madison</span>
        </h2>
        <p className="text-gray-600 mb-3">
          stay hungry, stay foolish (yeah, I know it’s cliché, but hey, it’s
          been sitting on my desk since middle school, judging my snack choices
          and bad ideas ever since)
          {/* Building robust apps and help communities. */}
        </p>
        <div className="flex text-2xl items-center mt-1 gap-3 justify-start text-slate-500">
          <a href="https://github.com/h2zh">
            <div className="hover:scale-110 ease-in">
              <FaGithub />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/howard-zhong-uwmadison/">
            <div className="hover:scale-110 ease-in">
              <FaLinkedinIn />
            </div>
          </a>
        </div>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          alt="Avatar"
          height={120}
          width={120}
          src={Avatar}
          priority
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Intro;
