import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <Link href='/'>
          <a className="font-bold text-2xl md:text-5xl tracking-tight mb-1 text-black">
            Howard Zhong
          </a>
        </Link>
        <h2 className="text-gray-700 mb-4">
          MSCS at <span className="font-semibold">UW-Madison</span>
        </h2>
        <p className="text-gray-600 mb-3">
          Building apps to make life easier and community better.
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
      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          alt="Howard Zhong"
          height={176}
          width={176}
          src="/avatar.jpeg"
          sizes="30vw"
          priority
          className="rounded-full"
        />
      </div>
      
    </div>
    // <div className="text-center border-b border-slate-300 p-4 text-gray-500">
    //   <Link href='/'>
    //     <a className="text-2xl font-bold text-slate-800">Howard Zhong</a>
    //   </Link>
    //   <div>MSCS @UW-Madison</div>
    //   <div className="flex justify-center gap-2 text-sm">
    //     <div>Mobile: (608) 982-5108</div>
    //     <div>Email: hzhong45@wisc.edu</div>
    //   </div>
    // </div>
  );
};

export default Header;
