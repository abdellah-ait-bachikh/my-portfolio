import ContactForm from "@/components/ContactForm";
import { getTranslations } from "next-intl/server";
import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = async () => {
  const t = await getTranslations("pages.contact");
  return (
    <section id="contact" className="">
      <div className="conatiner flex justify-center px-2 sm:px-10">
        <div className="max-w-6xl w-full bg-transparent backdrop-blur-sm p-8 rounded-2xl border-2 border-white/50">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
