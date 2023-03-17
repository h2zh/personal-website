import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="text-center border-t border-slate-300 p-4 text-slate-400">
        <div>© 2021 - 2023 Howard Zhong</div>
        <div className="flex text-xl items-center mt-1 gap-2 justify-center ">
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
    </div>
  );
};

export default Footer;
