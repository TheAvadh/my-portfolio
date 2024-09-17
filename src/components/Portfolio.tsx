"use client";

import { motion } from 'framer-motion';
import Image from "next/image";
import project1 from "../assets/project-1.png";
import project2 from '../assets/project-2.png';

const projects = [
    {
        title: "Serverless Finance Manager",
        desc: "A web application for managing personal expenses, credits, and daily financial transactions, leveraging AWS services such as Cognito, Amplify, Step Functions, API Gateway, and more to achieve a serverless architecture.",
        devstack: "React, NodeJS, AWS RDS, API Gateway, IaC, CloudFormation",
        link: "#",
        git: "https://github.com/TheAvadh/ExpenseTracker.git",
        src: project1
    },
    {
        title: "Waste Management App",
        desc: "A web application to schedule a pickup for your waste, credits points for the waste, and auctions the categorized waste to recyclers. It has 3 separate portals for the users, recyclers, and the admin, and has an auction system built with Spring Boot.",
        devstack: "Spring Boot, React, Spring Security, CI/CD, Docker",
        link: "#",
        git: "https://github.com/TheAvadh/EcoCredit.git",
        src: project2
    }
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 sm: align-cen'>
                Selected <span className='text-orange-400'>Projects</span>
            </h1>

            <div className=' px-6 md:px-0 max-w-[1000px] mx-auto space-y-24'>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 75}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.25}}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row gap-12"}`}
                    >
                        <div className='space-y-2 max-w-[550px]'>

                            <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                            <h2>{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                            <p className='text-xl my-4 text-orange-400 font-semibold'>{project.devstack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4'></div>
                            <div>
                                {/* <a href={project.link} className="mr-6">Deployment Link</a> */}
                                <a href={project.git}>Git</a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover rounded-lg border-gray-700'/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
