"use client";

import React from "react";

export default function About() {
  return (
    <div className="flex min-h-screen justify-center items-center sm:justify-end sm:items-start sm:pr-16 sm:pt-16 py-8 px-4">
      <div className="max-w-3xl w-full">
       <p className="sm:text-lg sm:text-right text-center text-md">
          Hello {`ツ` } I am a recent graduate from the University of Colorado Boulder with a Bachelor of Science in Computer Science.
          This summer I am continuing my education here in Boulder where I am beginning my Master&apos;s degree in Biomedical Engineering.
          <br /><br />
          I am extremely passionate about using technology and software to solve challenges in our healthcare and medical system.
          I&apos;m an intern at The Cigna Group, where I work with big data and am currently learning Rust 🦀. 
          <br /><br />
          During my free time I enjoy cycling, my girlfriend and I love to train our dog Gary, and I listen to a lot of music.
        </p>
      </div>
    </div>
  );
}
