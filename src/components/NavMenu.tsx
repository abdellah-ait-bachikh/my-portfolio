"use client";
import { useNavigationLink } from "@/context/navigationContext";
import useClickOutSide from "@/hooks/useClickOutSIde";
import { navLinks } from "@/lib/constance";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsList } from "react-icons/bs";

const NavMenu = () => {
  const t = useTranslations("components.header.navbar");
  const [isActive, setIsActive] = useState(false);
  const { activeLink, setActiveLink } = useNavigationLink();
  const ref = useClickOutSide(()=>{setIsActive(false)})
  // IntersectionObserver callback
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      // Trigger when 50% of the element is visible in the viewport
      if (entry.isIntersecting) {
        setActiveLink("#" + entry.target.id || "");
        window.location.hash = "#" + entry.target.id || "";
        console.log("#" + entry.target.id); // Log the ID of the element
      }
    });
  };

  useEffect(() => {
    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Target all elements with an ID to observe
    const elements = document.querySelectorAll("[id]");
    elements.forEach((element) => observer.observe(element));

    // Cleanup observer when component unmounts
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);
useEffect(()=>{

},[])
  return (
    <nav className={`flex items-center font-semibold`} ref={ref}>
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
        {navLinks.map((e) => (
          <Link
            key={e.label}
            href={e.href}
            onClick={(event) => {
              event.preventDefault();
              const element = document.getElementById(e.href.replace("#", ""));
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
              setIsActive(false);

              setActiveLink(e.href);
            }}
            className={`p-3 text-2xl md:text-lg relative 
          before:content-[''] before:absolute before:left-0 before:bottom-0
          before:h-[2px] before:w-0 before:bg-black dark:before:bg-white before:rounded-xl
          before:transition-all before:duration-300 before:ease-in-out
          hover:before:w-full ${
            activeLink === e.href ? "before:w-full" : "before:w-0"
          }`}
          >
            {t(e.label)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
