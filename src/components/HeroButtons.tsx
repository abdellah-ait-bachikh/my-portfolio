"use client";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
const HeroButtons = () => {
  const t = useTranslations('pages.home')
  return (
    <div className="flex items-center gap-3">
      <motion.a
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
        href="/cv.pdf"
        download
        className="px-6 py-3 bg-default-200 text-black  rounded-xl text-sm  md:text-lg font-medium hover:bg-default-300 transition cursor-pointer w-fit flex items-center flex-nowrap gap-2"
      >
        <span className="text-nowrap">{t('cv_btn')}</span>

        <FaDownload />
      </motion.a>
      <motion.a
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
        href="/#contact"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        download
        className="px-6 py-3 bg-success-200 text-black  rounded-xl text-sm  md:text-lg font-medium hover:bg-success-300 transition cursor-pointer w-fit flex items-center flex-nowrap gap-2"
      >
        <span className="text-nowrap">{t('contact_btn')}</span>

        <RiSendPlaneFill />
      </motion.a>
    </div>
  );
};

export default HeroButtons;
