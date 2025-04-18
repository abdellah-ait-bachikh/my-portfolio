"use client";
import React, { useState } from "react";
import ToggleDark from "./ToggleDark";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiSettings } from "react-icons/fi";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  return (
    <span className="fixed top-[100px] ltr:right-[20px] rtl:left-[20px] ">
      <div className="relative">
        <motion.button
          className="text-3xl cursor-pointer"
          animate={{
            x: [0, locale === "ar" ? 10 : -10, 0], // Animation direction based on locale
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          onClick={() => setIsOpen((prev) => !prev)} // Toggle visibility
        >
          <FiSettings className={ `${isOpen ? "ltr:rotate-180 " :"rtl:rotate-180"} transition-all duration-300 ease-in-out`} />
        </motion.button>

        {/* The motion div with scale animation */}
        <motion.div
           initial={{ opacity: 0, x: locale === "ar" ? "-100%" : "100%" }} // Initially from left or right depending on locale
           animate={{
             opacity: isOpen ? 1 : 0, // Fade in/out based on isOpen state
             x: isOpen ? 0 : locale === "ar" ? "-100%" : "100%", // Move to original position or out of screen based on isOpen state
           }}
           transition={{
             duration: 0.5, // Slide animation duration
             ease: "easeInOut", // Smooth transition effect
           }}
          className={`bg-transparent backdrop-blur-md p-2 rounded-2xl absolute ltr:right-[calc(100%+15px)] rtl:left-[calc(100%+15px)] top-[calc(100%+15px)] flex flex-col items-center gap-3`}
        >
          <ToggleDark />
          <LanguageSwitcher/>
        </motion.div>
      </div>
    </span>
  );
};

export default Settings;
