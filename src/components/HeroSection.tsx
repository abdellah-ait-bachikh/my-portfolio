"use client";
import TypingName from "./TypingName";
import HeroButtons from "./HeroButtons";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
const HeroSection = () => {
  const t = useTranslations("pages.home");
  return (
    <>
      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          {t("title")} <TypingName />
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8">
          {t("text")}
        </p>
        <HeroButtons />
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <img
          src="/hero_image.png"
          alt="Hero Illustration"
          className="w-full h-auto rounded-xl"
        />
      </motion.div>
    </>
  );
};

export default HeroSection;
