"use client";

import React from "react";
import Link from "next/link";

export default function Colophon() {
  return (
    <div className="flex flex-col justify-end min-h-screen pr-16 pb-16">
      <div className="max-w-3xl self-end">
        <p className="text-lg text-right">
          This website is built using Next.js, React, Tailwind CSS, and Material UI. This is all definitely overkill for a personal portfolio, but I wanted to have a fun tiny project to work on. The source code is available on{" "}
          <Link
            href="https://github.com/vincedbowen/vincedbowen.github.io"
            className="underline  hover:no-underline"
          >
            GitHub
          </Link>
          .
          <br /><br />
          The design is heavily inspired by the ebb and flow of nature. I wanted to create a site with jelly-like blobs floating around like jellyfish or a lava lamp. The blobs are animated using Framer Motion
          , and I had to do quite a bit of work to reduce the {" "}
          <Link
            href="https://en.wikipedia.org/wiki/Colour_banding"
            className="underline  hover:no-underline"
          >
            banding
          </Link>
          . I originally wanted a darker background,
          but discovered the banding was much more pronounced and obvious. Even with the lighter background, I still noticed some sharp edges, so I added blurring to reduce this. There still may be some banding on lower quality monitors, but I think it still looks really cool.
          <br /><br />
          Thank you to some of my close friends and fellow developers for their great inspiration:{" "}
          <Link
            href="https://jackp50.github.io/"
            className="underline  hover:no-underline"
          >
            Jack Pearne
          </Link>
          ,{" "}
          <Link
            href="https://jettneubacher.github.io/"
            className="underline hover:no-underline"
          >
            Jett Neubacher
          </Link>
          , and{" "}
          <Link
            href="https://natew.xyz/"
            className="underline hover:no-underline"
          >
            Nate Weaver
          </Link>
          . Check out their portfolios for some really beautiful designs and to learn more about these amazing people!
        </p>
      </div>
    </div>
  );
}