"use client";
import { useTranslations } from "next-intl";
import {
  FaAd,
  FaAddressBook,
  FaAdn,
  FaBaby,
  FaSchool,
  FaStar,
  FaUbuntu,
  FaWodu,
} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { IoMdChatboxes } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import Image from "next/image";

const Projects = () => {
  const t = useTranslations("pages.projects");
  return (
    <section id="projects" className="">
      <h1 className=" text-4xl font-bold text-center">{t("title")}</h1>
      <div dir="ltr" className="mt-6">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            contentStyle={{ borderRadius: 18 }}
            textClassName="dark:bg-slate-800"
            date="20 days"
            iconClassName="bg-success-200 dark:bg-slate-800 text-white rounded-full"
            icon={<LuLayoutDashboard />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Pockemone Pay Dashboard
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Tan-Tan Morroco
            </h4>
            <div className="w-full">
              <Image
                alt="project-1"
                src="/images/projects/project-1.png"
                className="w-full"
                width={100}
                height={100}
              />
            </div>
            <p className="text-base">
              Pockemone Pay Dashboard is a modern, easy-to-use payment
              management system designed specifically for Pockemone Snack. This
              dashboard helps staff efficiently handle customer payments, track
              transactions, and manage real-time payment data in a fast-paced
              snack environment.
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="15 days"
                        contentStyle={{ borderRadius:18 }}

            iconClassName="bg-teal-400/70 dark:bg-slate-800 text-white rounded-full"
            icon={<GrLanguage />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Art Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              San Francisco, CA
            </h4>
            <p className="text-base">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="13 days"
            contentStyle={{borderRadius:18 }}

            iconClassName="bg-teal-400/70 dark:bg-slate-800 text-white rounded-full"
            icon={<BsShop />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Web Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Los Angeles, CA
            </h4>
            <p className="text-base">User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="28 days"
            contentStyle={{borderRadius:18 }}

            iconClassName="bg-teal-400/70 dark:bg-slate-800 text-white rounded-full"
            icon={<IoMdChatboxes />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold ">
              Web Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              San Francisco, CA
            </h4>
            <p className="text-base">User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            date="April 2013"
            contentStyle={{borderRadius:18 }}

            iconClassName="bg-pink-500 text-white rounded-full"
            icon={<FaWodu />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Online Course
            </h4>
            <p className="text-base">Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            date="11 days"
            contentStyle={{borderRadius:18 }}

            iconClassName="bg-pink-500 text-white rounded-full"
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Certification
            </h4>
            <p className="text-base">
              Creative Direction, User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            date="8 days"
            contentStyle={{borderRadius:18 }}

            iconClassName="bg-pink-500 text-white rounded-full"
            icon={<FaAddressBook />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Bachelor Degree
            </h4>
            <p className="text-base">Creative Direction, Visual Design</p> 
          </VerticalTimelineElement>*/}
          <VerticalTimelineElement
            iconClassName="bg-green-500 text-white rounded-full"
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Projects;
