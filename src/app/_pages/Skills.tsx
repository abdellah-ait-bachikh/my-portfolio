import Card from "@/components/Card";
import { skills } from "@/lib/constance";
import { getTranslations } from "next-intl/server";
import React from "react";

const Skills = async () => {
  const t = await getTranslations("pages.skills");
  return (
    <section
      id="skills"
      className="min-h-screen  flex items-center justify-center mt-4"
    >
      <div className="conatiner text-center">
        <h1 className="underline underline-offset-4 text-4xl font-bold">
          {t("title")}
        </h1>
        <div className=" mt-9 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  ">
          {skills.map((e) => (
            
            <Card key={e.id} img={e.image} label={e.label} date={e.date} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
