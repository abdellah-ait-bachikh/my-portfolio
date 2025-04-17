"use client";
import React, { useEffect, useState } from "react";

const ToggleDark = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      console.log('theme is dark')
    } else {
      document.documentElement.classList.remove("dark");
      console.log('theme is light')
    }
  }, [isDark]);
  return <button className="" onClick={() => setIsDark((prev) => !prev)}>ToggleDark</button>;
};

export default ToggleDark;
