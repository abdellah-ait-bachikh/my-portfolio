"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function LanguageSwitcher({setIsOpen}:{setIsOpen:(prev:boolean)=>void}) {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    setCookie("NEXT_LOCALE", locale);
    setIsOpen(false)
    router.refresh();
  };

  return (
    <div className="text-3xl relative">
      
      <motion.div initial={{scale:0.3}} animate={{scale:1}} className=" flex  gap-3 flex-col text-lg">
        <button
          className="cursor-pointer rounded-xl bg-white text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 dark:bg-slate-800 py-1 px-2 font-semibold"
          onClick={() => switchLanguage("en")}
        >
          en
        </button>
        <button
          className="cursor-pointer rounded-xl bg-white text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 dark:bg-slate-800 py-1 px-2 font-semibold"
          onClick={() => switchLanguage("fr")}
        >
          fr
        </button>
        <button
          className="cursor-pointer rounded-xl bg-white text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 dark:bg-slate-800 py-1 px-2 font-semibold"
          onClick={() => switchLanguage("de")}
        >
          de
        </button>
        <button
          className="cursor-pointer rounded-xl bg-white text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 dark:bg-slate-800 py-1 px-2 font-semibold"
          onClick={() => switchLanguage("ar")}
        >
          ar
        </button>
      </motion.div>
    </div>
  );
}
