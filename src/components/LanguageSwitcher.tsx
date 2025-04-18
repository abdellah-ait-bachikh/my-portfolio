"use client";

import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function LanguageSwitcher() {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    setCookie("NEXT_LOCALE", locale);
    router.refresh();
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => switchLanguage("en")}
        className="p-2 cursor-pointer"
      >
        English
      </button>
      <button
        onClick={() => switchLanguage("ar")}
        className="p-2 cursor-pointer"
      >
        العربية
      </button>
      <button
        onClick={() => switchLanguage("fr")}
        className="p-2 cursor-pointer"
      >
        french
      </button>
      <button
        onClick={() => switchLanguage("de")}
        className="p-2 cursor-pointer"
      >
        deutsch
      </button>
    </div>
  );
}
