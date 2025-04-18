"use client";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsList } from "react-icons/bs";

const NavMenu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className={`flex items-center font-semibold`}>
      <button
        className="cursor-pointer md:hidden"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {isActive ? <AiOutlineClose size={38} /> : <BsList size={38} />}
      </button>
      <div
        className={classNames(
          `fixed md:static left-0 right-0 top-20 flex flex-col bg-white/70 dark:bg-slate-800/80 dark:md:bg-transparent  shadow-sm   
            md:top-0 md:flex-row md:h-fit md:items-center md:bg-transparent md:gap-1 md:backdrop-blur-none md:shadow-none overflow-hidden md:overflow-visible  transition-[height] duration-300 ease-in-out`,
          {
            "h-[224px] md:h-fit": isActive,
            "h-0  md:block md:h-fit": !isActive,
          }
        )}
      >
        <Link
          href="#"
          className="p-3 text-2xl md:text-lg relative 
          before:content-[''] before:absolute before:left-0 before:bottom-0
          before:h-[2px] before:w-0 before:bg-black dark:before:bg-white before:rounded-xl
          before:transition-all before:duration-300 before:ease-in-out
          hover:before:w-full"        >
          About
        </Link>
        <Link href="#"  className="p-3 text-2xl md:text-lg relative 
             before:content-[''] before:absolute before:left-0 before:bottom-0
             before:h-[2px] before:w-0 before:bg-black dark:before:bg-white before:rounded-xl
             before:transition-all before:duration-300 before:ease-in-out
             hover:before:w-full">
          Projects
        </Link>
        <Link href="#"  className="p-3 text-2xl md:text-lg relative 
             before:content-[''] before:absolute before:left-0 before:bottom-0
             before:h-[2px] before:w-0 before:bg-black dark:before:bg-white before:rounded-xl
             before:transition-all before:duration-300 before:ease-in-out
             hover:before:w-full">
          Skills
        </Link>
        <Link href="#"  className="p-3 text-2xl md:text-lg relative 
             before:content-[''] before:absolute before:left-0 before:bottom-0
             before:h-[2px] before:w-0 before:bg-black dark:before:bg-white before:rounded-xl
             before:transition-all before:duration-300 before:ease-in-out
             hover:before:w-full">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavMenu;
