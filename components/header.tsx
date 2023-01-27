import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Avatar from "../public/avatar.jpg"; // this is the proper way to display this image on Github Pages

const Header = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start justify-evenly">
      <div className="flex flex-col pr-8">
        <Link href="/">
          <a className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">
            Howard Zhong
          </a>
        </Link>
        <h2 className="text-gray-700 mb-4">
          MSCS at <span className="font-semibold">UW-Madison</span>
        </h2>
        <p className="text-gray-600 mb-3">
          Building robust apps and help communities.
        </p>
        <div className="flex text-2xl items-center mt-1 gap-3 justify-start text-slate-500">
          <a href="https://github.com/h2zh">
            <div className="hover:scale-110 ease-in">
              <FaGithub />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/hehuan-zhong/">
            <div className="hover:scale-110 ease-in">
              <FaLinkedinIn />
            </div>
          </a>
        </div>
      </div>
      <div className="w-[80px] sm:w-[176px]  mb-6 sm:mb-0 mr-auto">
        <Image
          alt="Avatar"
          height={176}
          width={176}
          src={Avatar}
          sizes="30vw"
          priority
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
