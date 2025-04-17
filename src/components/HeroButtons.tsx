"use client"
import Link from 'next/link'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import {motion} from 'framer-motion'
const HeroButtons = () => {
  return (
    <div className="flex items-center gap-3">
    <motion.a
    initial={{scale:1}}
    whileHover={{scale:1.1 }}
    transition={{duration:0.1}}
      href="/cv.pdf"
      download
      className="px-6 py-3 bg-default-200 text-black  rounded-xl text-sm  md:text-lg font-medium hover:bg-default-300 transition cursor-pointer w-fit flex items-center flex-nowrap gap-2"
    >
      <span className="text-nowrap">Download Cv</span>

      <FaDownload />
    </motion.a>
    <motion.a
    initial={{scale:1}}
    whileHover={{scale:1.1 }}
    transition={{duration:0.1}}
      href="/cv.pdf"
      download
      className="px-6 py-3 bg-success-200 text-black  rounded-xl text-sm  md:text-lg font-medium hover:bg-success-300 transition cursor-pointer w-fit flex items-center flex-nowrap gap-2"
    >
      <span className="text-nowrap">Contact me</span>

      <RiSendPlaneFill />
    </motion.a>
  </div>  )
}

export default HeroButtons