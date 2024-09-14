"use client";
import React from 'react'
import Image from "next/image";
import book from '../assets/book.png'
import bulb from '../assets/bulb.png'
import experience from '../assets/experience.png'
import computer from '../assets/computer.png'

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id="about">
        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
            About <span className='text-orange-400'>Me</span>
        </h1>
        <div className='px-6 md:px-0 grid md:grid-cols-8 gap-6 place-items-center'>

            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt="Education" className="w-auto h-[130px]"/>
                    <div className='flex flex-col mt-2 ml-6'>
                        <h2 className='text-xl font-bold text-white'>Education</h2>
                        <p className='text-lg text-white/70 mt-2'>I am pursuing Masters in Applied Computer Science from Dalhousie Univesity after completing Bachelors in computer engineering from MBIT, India.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={bulb} alt="soft skills" className="w-auto h-[120px]"/>
                    <div className='flex flex-col mt-2  ml-6'>
                        <h2 className='text-xl font-bold text-white'>Soft skills</h2>
                        <p className='text-lg text-white/70 mt-2'>I am disciplined and organized team person who loves to communicate.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={experience} alt="experience" className="w-auto h-[130px]"/>
                    <div className='flex flex-col mt-2 ml-6'>
                        <h2 className='text-xl font-bold text-white'>Experience</h2>
                        <p className='text-lg text-white/70 mt-2'>I have worked as a full-stack developer and build multiple projects.</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={computer} alt="computer" className="w-auto h-[130px]"/>
                    <div className='flex flex-col mt-2 ml-6'>
                        <h2 className='text-xl font-bold text-white'>Technical Skills</h2>
                        <p className='text-lg text-white/70 mt-2'>I am expert in Sprin Boot, React, .Net, Node, NextJS and Cloud Technologies like AWS service, GCP, K8s, Docker, Terraform along with other SD technologies like CI/CD and Git.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default About