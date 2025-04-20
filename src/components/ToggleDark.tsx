"use client";

import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { motion } from "framer-motion";

const ToggleDark: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const cookieTheme = getClientCookie("theme");
    if (cookieTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const getClientCookie = (name: string): string | undefined => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="))
      ?.split("=")[1];
  };

  const handleToggle = async () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);

    const res = await fetch("/api/set-theme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ theme: newTheme }),
    });

    if (res.ok) {
      console.log("Server cookie updated.");
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.button
      whileTap={{ scale: 0.7 }}
      className="w-fit h-fit p-1 text-3xl"
      onClick={handleToggle}
    >
      {isDark ? (
        <GoSun className="cursor-pointer" />
      ) : (
        <FaRegMoon className="cursor-pointer" />
      )}
    </motion.button>
  );
};

export default ToggleDark;
