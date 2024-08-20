"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion, animate, useMotionValue } from 'framer-motion';
import { useEffect } from "react";
import Typewriter from 'typewriter-effect'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-8 pl-16 white">
      <div className="z-10 max-w-2xl  lg:flex -rotate-12">
            <text className="text-9xl font-bold"> 
              <span className="text-red">
                <Typewriter 
                options={{
                  cursor: "",
                  loop: true,
                }}
                  onInit={(typewriter) => { 
                    typewriter.typeString('Vincent<br>') 
                      .pauseFor(100)
                      .typeString('<span style="color: #3C9DC8;">Bowen</span>')
                      .start()
                  }} 
                />
              </span>
            </text>
      </div>
      <div className="flex flex-1 justify-center items-center absolute">
        <Link className="underline text-2xl text-yellow hover:no-underline hover:text-white" href="/about">Click to Enter</Link>
      </div>
      
    </main>
  );
}

