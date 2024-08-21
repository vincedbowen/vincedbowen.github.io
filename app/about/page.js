"use client";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

export function LinkedInIcon() {
  return (
    <Link href="https://www.linkedin.com/">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaLinkedin className="size-10 fill-red hover:fill-white" />
      </motion.div>
    </Link>
  );
}

export function GithubIcon() {
  return (
    <Link href="https://www.linkedin.com/">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaGithubSquare className="size-10 fill-light-blue hover:fill-white" />
      </motion.div>
    </Link>
  );
}

export default function About() {
  return (
  <main className="overflow-x-hidden flex flex-col min-h-screen">
    <Navbar/>
    <div className="flex flex-col flex-grow items-center bg-gray-100 pt-32 ">
      <h1 className="text-6xl font-bold mb-2 text-center">Vincent Bowen</h1>
      <div className="grid grid-cols-7 w-auto mb-10 items-end">
        <LinkedInIcon/>
        <GithubIcon/>
        <Link className="underline hover:no-underline hover:text-white col-span-5 text-lg pl-6 text-yellow" href="mailto:vincent@vincentbowen.com">
          vincent@vincentbowen.com
        </Link>
      </div>
      {/* Centered Paragraph */}
      <p className="text-lg text-center max-w-5xl">
        Hello! I am a senior studying Computer Science at the University of Colorado Boulder.
        I am minoring in Biomedical Engineering and receiving a certificate in Engineering Leadership.
        This last spring, I was admitted into an accelerated Master of Science program in Computer Science and have been very excited to take graduate courses for that.
        Currently, I am extremely passionate about using technology and software to solve challenges in our healthcare & medical system. <br/>
        During my free time, I enjoy cycling, getting outdoors, and listening to music!
      </p>
    </div>
    <Footer/>
  </main>
  );
}