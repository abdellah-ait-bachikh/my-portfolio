"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const AcountsSection = () => {
  return (
    <div className="flex items-center justify-center gap-6 ">
      <motion.span whileHover={{ scale: 1.1 }}>
        <a
          href="https://github.com/abdellah-ait-bachikh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 rounded-full hover:bg-teal-100  cursor-pointer hover:shadow-[0_0_20px_5px_rgba(13,148,136,0.4)] dark:hover:shadow-[0_0_20px_5px_rgba(94,234,212,0.6)] hover:dark:text-black"
        >
          <FaGithub size={30} />
        </a>
      </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}>
        <a
          href="https://www.linkedin.com/in/abdellah-ait-bachikh-83121a2a2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 rounded-full hover:bg-teal-100  cursor-pointer hover:shadow-[0_0_20px_5px_rgba(13,148,136,0.4)] dark:hover:shadow-[0_0_20px_5px_rgba(94,234,212,0.6)] hover:dark:text-black"
        >
          <FaLinkedin size={30} />
        </a>
      </motion.span>
    </div>
  );
};

export default AcountsSection;
