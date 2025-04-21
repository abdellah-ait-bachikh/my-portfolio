import { getTranslations } from "next-intl/server";
import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = async () => {
  const t = await getTranslations('pages.contact')
  return (
    <section id="contact" className="mt-1">
      <div className="conatiner flex justify-center">
        <div className="max-w-6xl w-full bg-transparent backdrop-blur-sm p-8 rounded-2xl border-2 border-white/50">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              // onClick={(e) => {
              //   e.preventDefault();
              //   const element = document.getElementById("contact");
              //   if (element) {
              //     element.scrollIntoView({ behavior: "smooth" });
              //   }
              // }}
              className="px-6 py-3 bg-success-200 text-black  rounded-xl text-sm  md:text-lg font-medium hover:bg-success-300 transition cursor-pointer w-full  gap-2"
            >
              <span className="text-nowrap">
                Send 
                {/* {t("contact_btn")} */}
                </span>

            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
