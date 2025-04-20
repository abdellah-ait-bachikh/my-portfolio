import { getTranslations } from "next-intl/server";
import { TbUserSquareRounded } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const About = async () => {
  const t = await getTranslations("pages.about");

  return (
    <section className=" w-full flex items-center justify-center " id="about">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-12">
        {" "}
        {/* Image Section */}
        <div className="flex justify-center flex-col items-center">
          <TbUserSquareRounded size={300} />
          <div className="flex items-center justify-center gap-6 ">
            <span>
              <FaGithub size={30} />
            </span>
            <span>
              <FaLinkedin size={30} />
            </span>
            <span>
              <MdAlternateEmail size={30} />
            </span>
          </div>
        </div>
        {/* Text Section */}
        <div className="space-y-6 text-gray-800 dark:text-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("title")}
          </h1>
          <p className="text-lg leading-relaxed font-semibold">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
