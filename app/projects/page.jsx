"use client"

import Link from 'next/link';
import React from 'react';

export default function Projects() {
    return (
        <div className="flex flex-col items-end min-h-screen pr-16 pb-16 pt-8">
            <div className="max-w-5xl w-full text-right">
                <ul className="list-none">
                    <li className='pb-8'>
                        <span className='text-3xl text-black pb-3 block text-left'>CignaVerse</span>
                        <p>
                            {`As part of my internship at Cigna, I collaborated with a team of interns to design and develop a comprehensive Android application aimed at enhancing the navigation of insurance information for policyholders.
                                    The serverless application, built using React Native and Expo, featured a community forum and an AI-powered health assistant, Vector.
                                    Vector utilized a private GPT instance and a vector database to provide personalized responses to users' health insurance inquiries, contextualized by their specific insurance plans.
                                    Additionally, users could engage in discussions where they could: ask questions, provide answers, upvote/downvote content, save posts, participate in threaded conversations, and report inappropriate content.`}
                            <br /><br />
                            As the database lead and a full stack developer, I architected and designed:
                        </p>
                        <div className="text-left w-full">
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
                        </div>
                        <p>
                            <br />
                            Furthermore, I contributed to the creation of API gateways, enabling authenticated users to securely interact with the database, leveraging a web application firewall to validate the legitimacy of all network requests.
                        </p>
                    </li>
                    <li className='pb-8'>
                        <span className='text-3xl text-black pb-3 block text-left'>
                            <Link href={'https://github.com/vincedbowen/mancala_ai'} className='underline text-black hover:no-underline'>Mancala AI</Link>
                        </span>
                        <p>
                            {`I initially developed a rudimentary and admittedly subpar version of a mancala AI as a project for the University of Colorado Boulder's CSCI 3202: Introduction to Artificial Intelligence course.
                                The project consisted of an altered form of mancala and a min-max algorithm in a Jupyter Notebook.
                                Recently, my girlfriend and I have been playing a lot of mancala, and I have been losing so badly!
                                I decided to overhaul my code, and turn it into a project I could be proud of (and maybe use to get some wins) ☉ ‿ ⚆!`}
                            <br /><br />
                            {`Leveraging a min-max algorithm with alpha-beta pruning, the bot has extremely high win rates against a random player. 
                                I would like to develop a UI to actually play the bot in real-time.
                                Currently implemented, however, is a Streamlit application that displays the win rates of random opponent vs. random opponent and random opponent vs. bot opponent (in real-time)!
                                Additionally, I've placed a strong emphasis on achieving extensive testing coverage and generating comprehensive documentation.`}
                        </p>
                    </li>
                    <li className='pb-8'>
                        <span className='text-3xl text-black pb-3 block text-left'>
                            <Link href={'https://github.com/vincedbowen/into-the-know'} className='underline text-black hover:no-underline'>Into the Know</Link>
                        </span>
                        <p>
                            {`Into the Know is a Python application built using Dash, Plotly, and the Strava API.
                                    Users can host the application locally, enabling them to explore and analyze their cycling statistics.
                                    Currently implemented is an average power per ride chart, and an archetype graph, visually representing premium user's maximum power output for certain, user-defined time intervals.`}
                            While the Strava API was extremely difficult to use due to obscure formatting and stringent token limitations, my web application provides valuable data analysis visualization to cyclists using <Link href={'https://www.strava.com/'} className='underline text-black hover:no-underline'>Strava</Link>.
                            I also implemented a bit of documentation using Sphinx and Read the Docs to enhance user accessibility and clarity.
                        </p>
                    </li>
                    <li className='pb-8'>
                        <span className='text-3xl text-black pb-3 block text-left'>Ambulance Dispatch Simulator</span>
                        <p>
                            {`As part of an Object-Oriented Analysis and Design course at university, a peer and I developed an ambulance dispatch simulator designed to manage emergency scenarios by dispatching the nearest, empty ambulance to patients and transporting them to the closest hospital.
                                    Our application used Groovy and Java-based for both the backend and frontend, with a Neo4J graph database leveraging a depth-first search algorithm to determine the closest ambulance and hospital.
                                    Communication between the client, represented by a hand-drawn GUI, and the server was facilitated through TooTallNate's Java-WebSocket, allowing for the seamless transmission of serialized data.`}
                            <br /><br />
                            To ensure our solution was flexible, reusable, extendible, and scalable, we implemented five classic object-oriented design patterns: the Observer, the Singleton, the Builder, the Adapter, and the Command.
                            <br /><br />
                            You can find a <Link href={'https://www.youtube.com/watch?v=rU7HIwiWxvU'} className='underline text-black hover:no-underline'>demo video here</Link> (please ignore some super annoying async bugs... ugh), and you can download our <Link href={'/dispatchUML.pdf'} target="_blank" rel="noopener noreferrer" className='underline text-black hover:no-underline'>UML here</Link>.
                        </p>
                    </li>
                    <li className='pb-8'>
                        <span className='text-3xl text-black pb-3 block text-left'>
                            <Link href={'https://github.com/vincedbowen/simple-tcp-chat'} className='underline text-black hover:no-underline'>Simple TCP Chat</Link>
                        </span>
                        <p>
                            I developed this super straightforward TCP chat room inspired by <Link href={'https://www.youtube.com/watch?v=SimNmTciQTs'} className='underline text-black hover:no-underline'>this tutorial</Link>.
                            By hosting a server on localhost, multiple clients on the same machine can connect through different terminal instances, enabling them to communicate in real time.
                            Built with Python and standard libraries, but I am eager to transition this code-base to C or C++.
                            I am super interested in networks and communication protocols, so I would love to make this simple program much more feature rich in the future.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}