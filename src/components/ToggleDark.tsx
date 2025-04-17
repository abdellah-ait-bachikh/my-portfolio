"use client";
import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { motion } from "framer-motion";
const ToggleDark = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      console.log("theme is dark");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("theme is light");
    }
  }, [isDark]);
  return (
    <motion.button
    whileTap={{ scale: 0.7 }}
    className="fixed top-[100px] right-[20px] cursor-pointer text-3xl"
    onClick={() => setIsDark((prev) => !prev)}
  >
    {isDark ? <GoSun /> : <FaRegMoon />}
  </motion.button>
  
  );
};

export default ToggleDark;
