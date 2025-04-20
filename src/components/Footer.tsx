"use client";
import Logo from "./Logo";
import FooterNavigation from "./FooterNavigation";
import { useTranslations } from "next-intl";
import AcountsSection from "./AcountsSection";

const Footer =  () => {
  const t =  useTranslations("components.footer");
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <Logo />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          {t("description")}
        </p>

        <FooterNavigation />

        <div className="mt-12 flex justify-center gap-6 md:gap-8">
        <AcountsSection/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
