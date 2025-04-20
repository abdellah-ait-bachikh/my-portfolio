"use client";
import { useNavigationLink } from "@/context/navigationContext";
import React from "react";
import { Concert_One } from "next/font/google";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
const ConcertOne = Concert_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const Logo = () => {
  const { setActiveLink } = useNavigationLink();
  const t = useTranslations("components.header");
  return (
    <Link
      href="/"
      className={`text-3xl md:text-4xl font-bold underline flex items-center`}
      onClick={(event) => {
        event.preventDefault();
        setActiveLink("");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      dir="ltr"
    >
      {" "}
      <span
        className={` ${ConcertOne.className}`}
        style={{
          textShadow: `
 
  0 0 20px rgba(13,148,136,0.4)
`,
        }}
      >
        {t("logo")}
      </span>{" "}
      <FaPencilAlt />
    </Link>
  );
};

export default Logo;
