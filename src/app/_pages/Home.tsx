import HeroButtons from "@/components/HeroButtons";
import TypingName from "@/components/TypingName";
import { getTranslations } from "next-intl/server";
import React from "react";

const Home = async () => {
const t = await getTranslations('pages.home')
  return (
    <div className="w-full  flex items-center justify-center " id="">
      <section className="container mt-10 mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
           {t('title')} <TypingName />
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8">
           {t('text')}
          </p>
          <HeroButtons />
        </div>

        {/* Image or Illustration */}
        <div className="flex-1">
          <img
            src="/hero_image.png"
            alt="Hero Illustration"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>
      
    </div>
  );
};

export default Home;
