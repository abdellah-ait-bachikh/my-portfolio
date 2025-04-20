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
  const ref = useClickOutSide(() => {
    setIsActive(false);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = "#" + section.id;
        }
      });
  
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
        window.history.replaceState(null, "", currentSection);
      }
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
  
    // Trigger initially in case the user refreshes mid-page
    handleScroll();
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink, setActiveLink]);
  
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
          hover:before:w-full  ${
            activeLink === e.href ? "before:w-full" : "before:w-0"
          }`}
          >
            <span
              style={{
                textShadow: `
      0 0 4px rgba(13,148,136,0.6),
      0 0 20px rgba(13,148,136,0.4)
    `,
              }}
            >
              {" "}
              {t(e.label)}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
