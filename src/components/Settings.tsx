"use client";
import React, { useState } from "react";
import ToggleDark from "./ToggleDark";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiSettings } from "react-icons/fi";
import useClickOutSide from "@/hooks/useClickOutSIde";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const ref = useClickOutSide(() => {
    setIsOpen(false);
  });

  return (
    <span
      className="fixed top-[100px] ltr:right-[20px] rtl:left-[20px] z-40"
      ref={ref}
    >
      <div className="relative">
  
        <motion.button
          className="text-3xl cursor-pointer"
          animate={{
            y: isOpen
              ? 0 
              : [0, locale === "ar" ? 10 : -10, 0], 
          }}
          transition={{
            duration: 2,
            repeat: isOpen ? 0 : Infinity, 
            repeatType: "loop",
            ease: "easeInOut",
          }}
          onClick={() => setIsOpen((prev) => !prev)} 
        >
          <FiSettings
            className={`${
              isOpen ? "ltr:rotate-180 rtl:rotate-180" : ""
            } transition-all duration-300 ease-in-out`}
          />
        </motion.button>

        <motion.div
          initial={{
            opacity: 0,
            x: locale === "ar" ? "-100%" : "100%", 
          }}
          animate={{
            opacity: isOpen ? 1 : 0, 
            x: isOpen ? 0 : locale === "ar" ? "-100%" : "100%", 
          }}
          transition={{
            duration: 0.5, 
            ease: "easeInOut", 
          }}
          className={`bg-transparent backdrop-blur-md p-2 rounded-2xl absolute ltr:right-[calc(100%+15px)] rtl:left-[calc(100%+15px)] top-[calc(100%+15px)] flex flex-col items-center gap-3`}
        >
          <ToggleDark />
          <LanguageSwitcher setIsOpen={setIsOpen} />
        </motion.div>
      </div>
    </span>
  );
};

export default Settings;
