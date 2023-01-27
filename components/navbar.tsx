import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import cn from "classnames";
import { HiMenuAlt4 } from "react-icons/hi";

function NavItem({ href, text }: any) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <>
      <div
        className={cn(
          isActive
            ? "font-semibold text-gray-800"
            : "font-normal text-gray-600",
          "md:inline-block sm:px-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <Link href={href}>{text}</Link>
      </div>
    </>
  );
}

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const handleNav = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="flex flex-col justify-center">
      <nav
        className={cn(
          isNavbarVisible ? "hidden" : "visible",
          "text-2xl sm:hidden mb-4"
        )}
      >
        <HiMenuAlt4 onClick={handleNav} />
      </nav>
      <nav
        className={cn(
          isNavbarVisible ? "visible" : "hidden",
          "sm:flex items-center justify-start w-full relative max-w-2xl mx-auto pb-2 sm:pb-2  text-gray-900"
        )}
      >
        <div className="ml-[-0.60rem]">
          <NavItem href="/" text="Home" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/aboutme" text="About Me" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
