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
        {/* <hr className='bg-white'/> */}
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
                            <text>
                                <br/>
                                During my internship on the Performance and Resiliency Engineering team, I focused on optimizing pipeline run times, resolving bugs, and enhancing the readability of NeoLoad performance testing reports for internal and externally facing web applications and APIs.
                                I enabled development teams to store updated performance runs on network-attached storage (NAS) and compare results from various dates, ensuring new code consistently outperformed previous production versions.
                                <br/><br/>
                                I developed a Python module to retrieve data from the NeoLoad API, format it, and store single test cycles on the NAS.
                                Additionally, I created another Python module to fetch, format, and generate Excel files to compare multiple reports from different dates.
                                These processes were automated through two declarative Jenkins pipelines hosted on CloudBees, which automatically emailed the resulting reports to the dev teams.
                                <br/><br/>
                                This new architecture saves over 2,500 hours of pipeline run time per development team per sprint, and significantly reduces the time spent reviewing reports!
                            </text>
                        </li>
                        <li>
                            <text className='text-lg text-red'>Course Manager/Assistant @ University of Colorado Boulder</text>
                            <br/>
                            <text>
                                During the spring semester of 2024, I served as the course and lab manager for CSCI: 5200 - Intro to Wireless Systems.
                                In this role, I guided students through complex topics such as: Analog & Digital Signals, Software Defined Radios, Sampling, Quadrature Signals, Digital Modulation, Receiver Structures, and Channel Models/Statistics.
                                I also conducted weekly lab sessions, where students engaged in hands-on learning using Agilent Handheld Spectrum Analyzers, GNU Radio, MATLAB, LabVIEW, commercial-grade radios, and LTE infrastructure equipment.
                                These assignments were focused on real-world and technical implementations of the theories explored in lectures.
                                I give many thanks to my professor, <Link href={'https://www.linkedin.com/in/malofquist/'} className='text-white underline hover:text-red hover:no-underline'>Mark Lofquist</Link>, for inspiring my new-found passion in wireless communication and networks as a whole. 
                                <br/><br/>
                                This last year I was a course assistant for CSCI: 3022 - Intro to Data Science, and was asked to be the course manager for the fall 2024 semester.
                                The course focused on key concepts: question formulation, data collection and cleaning, visualization, statistical inference, predictive modeling, and decision-making, and homework assignments were completed in Python with a variety of external libraries. 
                                <br/><br/>
                                I developed and released a Python package on PyPi, <Link href={'https://pypi.org/project/simple-latex-checker/'} className='text-white underline hover:text-red hover:no-underline'>simple-latex-checker</Link> designed to address the most common issue students encounter when converting their Jupyter Notebooks to PDFs: erroneous spaces in their inline LaTeX.
                                I spun this up in a few hours by using RegEx pattern matching, but I would love to add more utility in the future to help students debug other common issues they face in technical assignments.
                            </text>
                        </li>
                        <li>
                        </li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td className='py-4 pr-10 align-top font-bold text-xl'>Projects</td>
                    <td className='p-4'>
                        <ul class="list-none">
                            <li>
                                <text className='text-lg text-light-blue'>CignaVerse</text>
                                <br/>
                                <text>
                                    {`As part of my internship at Cigna, I collaborated with a team of interns to design and develop a comprehensive Android application aimed at enhancing the navigation of insurance information for policyholders.
                                    The serverless application, built using React Native and Expo, featured a community forum and an AI-powered health assistant, Vector.
                                    Vector utilized a private GPT instance and a vector database to provide personalized responses to users' health insurance inquiries, contextualized by their specific insurance plans.
                                    Additionally, users could engage in discussions where they could: ask questions, provide answers, upvote/downvote content, save posts, participate in threaded conversations, and report inappropriate content.`}
                                    <br/><br/>

                                    As the database lead and a full stack developer, I architected and designed:
                                    <ul className='list-disc ml-8'>
                                        <li>
                                            Two DynamoDB tables for managing user information and post data
                                        </li>
                                        <li>
                                            Cognito user and identity pools to authenticate and identify users via OAuth2, issuing Java Web Tokens (JWTs) to secure API access.
                                        </li>
                                        <li>
                                            A Lambda function to monitor the posts table, logging reported posts to CloudWatch for human review
                                        </li>
                                    </ul> 
                                    <br/>
                                    Furthermore, I contributed to the creation of API gateways, enabling authenticated users to securely interact with the database, leveraging a web application firewall to validate the legitimacy of all network requests.
                                </text>
                            </li>
                            <li>
                                <text className='text-lg text-yellow'>
                                    <Link href={'https://github.com/vincedbowen/mancala_ai'} className='underline hover:text-white hover:no-underline'>Mancala AI</Link>
                                </text>
                                <br/>
                                <text>
                                {`I initially developed a rudimentary and admittedly subpar version of a mancala AI as a project for the University of Colorado Boulder's CSCI 3202: Introduction to Artificial Intelligence course.
                                The project consisted of an altered form of mancala and a min-max algorithm in a Jupyter Notebook.
                                Recently, my girlfriend and I have been playing a lot of mancala, and I have been losing so badly!
                                I decided to overhaul my code, and turn it into a project I could be proud of (and maybe use to get some wins) ☉ ‿ ⚆!`}
                                <br/><br/>
                                {`Leveraging a min-max algorithm with alpha-beta pruning, the bot has extremely high win rates against a random player. 
                                I would like to develop a UI to actually play the bot in real-time.
                                Currently implemented, however, is a Streamlit application that displays the win rates of random opponent vs. random opponent and random opponent vs. bot opponent (in real-time)!
                                Additionally, I've placed a strong emphasis on achieving extensive testing coverage and generating comprehensive documentation.`}
                                </text>
                            </li>
                            <li>
                                <text className='text-lg text-red'>
                                    <Link href={'https://github.com/vincedbowen/into-the-know'} className='underline hover:text-white hover:no-underline'>Into the Know</Link>
                                </text>
                                <br/>
                                <text>
                                    {`Into the Know is a Python application built using Dash, Plotly, and the Strava API.
                                    Users can host the application locally, enabling them to explore and analyze their cycling statistics.
                                    Currently implemented is an average power per ride chart, and an archetype graph, visually representing premium user's maximum power output for certain, user-defined time intervals.`}
                                    While the Strava API was extremely difficult to use due to obscure formatting and stringent token limitations, my web application provides valuable data analysis visualization to cyclists using <Link href={'https://www.strava.com/'} className='text-white underline hover:text-red hover:no-underline'>Strava</Link>.
                                    I also implemented a bit of documentation using Sphinx and Read the Docs to enhance user accessibility and clarity.
                                </text>
                            </li>
                            <li>
                                <text className='text-lg text-light-blue'>Ambulance Dispatch Simulator</text>
                                <br/>
                                <text>
                                    {`As part of an Object-Oriented Analysis and Design course at university, a peer and I developed an ambulance dispatch simulator designed to manage emergency scenarios by dispatching the nearest, empty ambulance to patients and transporting them to the closest hospital.
                                    Our application used Groovy and Java-based for both the backend and frontend, with a Neo4J graph database leveraging a depth-first search algorithm to determine the closest ambulance and hospital.
                                    Communication between the client, represented by a hand-drawn GUI, and the server was facilitated through TooTallNate's Java-WebSocket, allowing for the seamless transmission of serialized data.`}
                                    <br/><br/>
                                    To ensure our solution was flexible, reusable, extendible, and scalable, we implemented five classic object-oriented design patterns: the Observer, the Singleton, the Builder, the Adapter, and the Command.
                                    <br/><br/>
                                    You can find a <Link href={'https://www.youtube.com/watch?v=rU7HIwiWxvU'} className='underline hover:text-light-blue hover:no-underline'>demo video here</Link> (please ignore some super annoying async bugs... ugh), and our UML diagram here.
                                </text>
                            </li>
                            <li>
                                <text className='text-lg text-yellow'>
                                    <Link href={'https://github.com/vincedbowen/simple-tcp-chat'} className='underline hover:text-white hover:no-underline'>Simple TCP Chat</Link>
                                </text>
                                <br/>
                                <text>
                                    I developed this super straightforward TCP chat room inspired by <Link href={'https://www.youtube.com/watch?v=SimNmTciQTs'} className='underline hover:text-yellow hover:no-underline'>this tutorial</Link>.
                                    By hosting a server on localhost, multiple clients on the same machine can connect through different terminal instances, enabling them to communicate in real time.
                                    Built with Python and standard libraries, but I am eager to transition this code-base to C or C++.
                                    I am super interested in networks and communication protocols, so I would love to make this simple program much more feature rich in the future.
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