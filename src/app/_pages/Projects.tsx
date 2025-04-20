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

const Projects = () => {
  const t = useTranslations("pages.projects");
  return (
    <section id="projects" className="min-h-screen mt-1 ">
      <h1 className="underline underline-offset-4 text-4xl font-bold text-center">
        {t("title")}
      </h1>
      <div dir="ltr" className="mt-6">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work dark:text-black "
            contentStyle={{borderRadius:18 }}
            textClassName="dark:bg-slate-800"
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconClassName="bg-blue-500 text-white rounded-full"
            icon={<FaUbuntu />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Miami, FL
            </h4>
            <p className="text-base">
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work dark:text-black"
            date="2010 - 2011"
                        contentStyle={{ borderRadius:18 }}

            iconClassName="bg-blue-500 text-white rounded-full"
            icon={<FaAdn />}
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
            className="vertical-timeline-element--work dark:text-black"
            date="2008 - 2010"
            contentStyle={{borderRadius:18 }}

            iconClassName="bg-blue-500 text-white rounded-full"
            icon={<FaBaby />}
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
            className="vertical-timeline-element--work dark:text-black"
            date="2006 - 2008"
            contentStyle={{borderRadius:18 }}

            iconClassName="bg-blue-500 text-white rounded-full"
            icon={<FaAd />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Web Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              San Francisco, CA
            </h4>
            <p className="text-base">User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education dark:text-black"
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
            className="vertical-timeline-element--education dark:text-black"
            date="November 2012"
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
            className="vertical-timeline-element--education dark:text-black"
            date="2002 - 2006"
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
          </VerticalTimelineElement>
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
