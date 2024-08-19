"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion, animate, useMotionValue } from 'framer-motion';
import { useEffect } from "react";

export default function Home() {
  const baseText = String("Vincent Bowen");
  const count = useMotionValue(0);
  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);
  return (
    <main className="flex min-h-screen flex-col justify-between p-8 pl-16 white">
      <div className="z-10 max-w-2xl  lg:flex -rotate-12">
        <span className="">
          <motion.span>
            <text className="text-9xl font-bold">
              {baseText}
            </text>
          </motion.span>
        </span>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Link className="underline hover:no-underline text-lg" href="/about">Click to Enter</Link>
      </div>
      
    </main>
  );
}

