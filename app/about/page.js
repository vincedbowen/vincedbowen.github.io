"use client";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

export function LinkedInIcon() {
  return (
    <Link href="https://www.linkedin.com/in/vincentbowen/">
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
    <Link href="https://github.com/vincedbowen">
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
    {/* <hr className='bg-white h-0.5 z-50'/> */}
    <div className="flex flex-col flex-grow items-center pt-32 ">
      <h1 className="text-6xl font-bold mb-2 text-center">Vincent Bowen</h1>
      <div className="grid grid-cols-7 w-auto mb-10 items-end">
        <LinkedInIcon/>
        <GithubIcon/>
        <Link className="underline hover:no-underline hover:text-white col-span-5 text-lg pl-6 text-yellow" href="mailto:vincent@vincentbowen.com">
          vincent@vincentbowen.com
        </Link>
      </div>
      {/* Centered Paragraph */}
      <p className="text-lg text-center max-w-4xl">
        Hello {`ツ`} I am a senior at the University of Colorado Boulder, studying computer science.
        This past spring, I was admitted into an <Link href={'https://www.colorado.edu/cs/academics/graduate-programs/professional-masters-computer-science'} className="underline hover:no-underline hover:text-red">accelerated {`Master's`} program</Link> will be graduating with both a Bachelor of Science and a Master of Science in Computer Science in May 2026.
        <br/><br/>
      
        Currently, I am extremely passionate about using technology and software to solve challenges in our healthcare and medical system.
        I just completed an internship at <Link href={'https://www.thecignagroup.com/'} className="underline hover:no-underline hover:text-light-blue">The Cigna Group</Link>, where I had the opportunity to work on exactly that!
        <br/><br/>
        During my free time, I enjoy cycling, getting outdoors, and listening to music!
      </p>
    </div>
    <Footer/>
  </main>
  );
}