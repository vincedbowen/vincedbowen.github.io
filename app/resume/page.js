"use client"

import Link from 'next/link';
import Navbar from '../components/Navbar';
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import React from 'react';
import Footer from '../components/Footer';

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
        <div className="grid grid-cols-7 w-52 mb-6 ml-14 items-baseline">
            <h1 className="text-4xl font-bold mb-2 mt-6 col-span-5">Resume</h1>
            <div className="col-span-2 flex justify-center">
                <ResumeDownload />
            </div>
        </div>
        <div>
        <table className="table-fixed ml-14 max-w-7xl">
            <tbody>
                <tr>
                    <td className='py-4 pr-10 align-top font-bold text-xl'>Experience</td>
                    <td className='p-4'>
                    <ul class="list-none">
                        <li>
                            <text className='text-lg text-yellow'>Software Engineer Intern @ The Cigna Group</text>
                        </li>
                        <li>
                            <text className='text-lg text-red'>Course Manager/Assistant @ University of Colorado Boulder</text>
                        </li>
                        <li>
                            <text className='text-lg text-light-blue'>Machine Learning Engineer @ AI for Good</text>
                        </li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td className='py-4 pr-10 align-top font-bold text-xl'>Projects</td>
                    <td className='p-4'>
                        <ul class="list-none">
                            <li>
                                <text className='text-lg text-yellow'>CignaVerse</text>
                            </li>
                            <li>
                                <text className='text-lg text-red'>Mancala AI</text>
                                <br/>
                                <text>
                                {`I initially developed a rudimentary and admittedly subpar version of a mancala AI as a project for the University of Colorado Boulder's CSCI 3202: Introduction to Artificial Intelligence course.
                                The project consisted of an altered form of mancala and a min-max algorithm in a Jupyter Notebook.
                                Recently, my girlfriend and I have been playing a lot of mancala, and I have been losing so badly!
                                I decided to overhaul my code, and turn it into a project I could be proud of (and maybe use to get some wins) 😅!`}
                                <br/><br/>
                                {`Leveraging a min-max algorithm with alpha-beta pruning, the bot has extremely high win rates against a random player. 
                                I would like to develop a UI to actually play the bot in real-time.
                                Currently implemented, however, is a Streamlit application that displays the win rates of random opponent vs. random opponent and random opponent vs. bot opponent (in real-time!)
                                Additionally, I've placed a strong emphasis on achieving extensive testing coverage and generating comprehensive documentation.`}
                                </text>
                            </li>
                            <li>
                                <text className='text-lg text-light-blue'>Into the Know</text>
                                <br/>
                                <text>
                                    {`Into the Know is a python application built using Dash, Plotly, and the Strava API.
                                    Users can host the application locally, enabling them to explore and analyze their cycling statistics.
                                    Currently implemented is an average power / ride chart, and an archetype graph, visually representing premium user's maximum power output for certain time intervals.
                                    The Strava API was extremely difficult to use due to obscure formatting and stringent token limitations.
                                    I also implemented a bit of documentation using Sphinx and Read the Docs to enhance user accessibility and clarity.`}
                                </text>
                            </li>
                            <li>
                                <text className='text-lg text-yellow'>Ambulance Dispatch Simulator</text>
                            </li>
                            <li>
                                <text className='text-lg text-red'>Increasing Uncrewed Underwater Vehicle (UUV) Range & Persistence</text>
                                <br/>
                                <text>
                                    {`Through a University of Colorado Boulder course, Designing for Defense, my team and I were tasked with extending the range and persistence of UUVs. 
                                    Our objective was to provide a minimum viable product aligned with the requirements for the Naval Sea Systems Command and commercial stakeholders.
                                    We engaged in comprehensive beneficiary analysis of members of the U.S. defense and scientific communities to understand operational, tactical, and strategic advantages in Naval Warfare and oceanic research.
                                    Leading a small group, I oversaw the ideation and development of a successful whitepaper and early prototype to NAVSEA.`}
                                </text>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <Footer/>
    </main>
  );
}