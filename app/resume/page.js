"use client"

import Link from 'next/link';
import Navbar from '../components/Navbar';
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import React from 'react';

export function ResumeDownload() {
    return (
      <Link href="https://www.linkedin.com/">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaFileDownload className="size-8 fill-light-blue hover:fill-white" />
        </motion.div>
      </Link>
    );
  }

export default function Resume() {
  return (
    <main>
        <Navbar/>
        <div className="grid grid-cols-7 w-64 mb-10 items-center">
            <h1 className="text-4xl font-bold mb-6 ml-8 mt-4 col-span-5">Resume</h1>
            <div className="col-span-2 flex items-center justify-center">
                <ResumeDownload />
            </div>
            
        </div>
        <div>
        <table className="table-fixed ml-8">
            <tbody>
                <tr className='p-4'>
                    <td>Education</td>
                    <td>Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti congue aenean accumsan pellentesque tellus aenean. Arcu massa quisque rhoncus molestie magna aliquam. Ac inceptos pretium per leo at. At eget faucibus integer mauris varius laoreet. Habitasse purus sagittis dis malesuada elit ultrices blandit luctus magna. Eros maximus vestibulum tempus efficitur nisi tincidunt dignissim. Curae dictum phasellus dapibus tincidunt ridiculus. Potenti lacus massa placerat; ornare ad metus vestibulum penatibus?</td>
                </tr>
                <tr className='p-4'>
                    <td>Experience</td>
                    <td>Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti congue aenean accumsan pellentesque tellus aenean. Arcu massa quisque rhoncus molestie magna aliquam. Ac inceptos pretium per leo at. At eget faucibus integer mauris varius laoreet. Habitasse purus sagittis dis malesuada elit ultrices blandit luctus magna. Eros maximus vestibulum tempus efficitur nisi tincidunt dignissim. Curae dictum phasellus dapibus tincidunt ridiculus. Potenti lacus massa placerat; ornare ad metus vestibulum penatibus?</td>
                </tr>
                <tr className='p-4'>
                    <td>Projects</td>
                    <td>Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti congue aenean accumsan pellentesque tellus aenean. Arcu massa quisque rhoncus molestie magna aliquam. Ac inceptos pretium per leo at. At eget faucibus integer mauris varius laoreet. Habitasse purus sagittis dis malesuada elit ultrices blandit luctus magna. Eros maximus vestibulum tempus efficitur nisi tincidunt dignissim. Curae dictum phasellus dapibus tincidunt ridiculus. Potenti lacus massa placerat; ornare ad metus vestibulum penatibus?</td>
                </tr>
            </tbody>
        </table>
        </div>
    </main>
  );
}