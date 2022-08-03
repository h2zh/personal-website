import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React from 'react';
import cn from 'classnames';


function NavItem({ href, text }: any) {
    const router = useRouter();
    const isActive = router.asPath === href;
  
    return (
      <NextLink href={href}>
        <a
          className={cn(
            isActive
              ? 'font-semibold text-gray-800 dark:text-gray-200'
              : 'font-normal text-gray-600 dark:text-gray-400',
            'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
          )}
        >
          <span className="capsize">{text}</span>
        </a>
      </NextLink>
    );
  }
  
const Navbar = () => {
  return (
    <div className="flex flex-col justify-center">
        <nav className="flex items-center justify-start w-full relative max-w-2xl mx-auto pb-2 sm:pb-2  text-gray-900">
          <div className="ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/#projects" text="Projects" />
            <NavItem href="/#profile" text="About Me" />
          </div>
        </nav>
    </div>
  )
}

export default Navbar