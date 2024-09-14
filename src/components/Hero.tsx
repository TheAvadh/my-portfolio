"use client"
import Image from "next/image";
import awslogo from "../assets/icon1.png"
import kubelogo from "../assets/icon2.png"
import springlogo from "../assets/icon3.png"
import reactlogo from "../assets/icon4.png"
import nodelogo from "../assets/icon5.png"
import dblogo from "../assets/icon6.png"
import profilepic from "../assets/profilepic.png"
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAf6E_80%)]">
        
        <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

        <div className="relative">
            <div className="text-8xl font-bold text-center">
                <h1 className="text-[#98B4CE]">Hi, I am</h1>
                <h1 className="text-[#E48A57]">Avadh</h1>
            </div>

            <motion.div
                className="absolute left-[280px] top-[140px] hidden sm:hidden md:hidden lg:block"
                animate={{ y: [0, 5, 0] }}  // Vertical movement
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth continuous animation
            >
                <Image
                src={awslogo}
                height="170"
                width="170"
                alt="cursor"
                className=""
                draggable="false"/>
                
            </motion.div>

            <motion.div
                className="absolute right-[220px] top-[160px] opacity-75 hidden sm:hidden md:hidden lg:block"
                animate={{ y: [0, 5, 0] }}  // Vertical movement
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth continuous animation
            >
                <Image
                src={kubelogo}
                height="190"
                width="190"
                alt="cursor"
                className=""
                draggable="false"/>
                
            </motion.div>

            <motion.div
                className="absolute left-[400px] top-[10px] opacity-75 hidden sm:hidden md:hidden lg:block"
                animate={{ y: [0, 5, 0] }}  // Vertical movement
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth continuous animation
            >
                <Image
                src={reactlogo}
                height="120"
                width="120"
                alt="cursor"
                className=""
                draggable="false"/>
                
            </motion.div>

            <motion.div
                className="absolute right-[350px] top-[10px] opacity-75 hidden sm:hidden md:hidden lg:block"
                animate={{ y: [0, 5, 0] }}  // Vertical movement
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth continuous animation
            >
                <Image
                src={springlogo}
                height="210"
                width="210"
                alt="cursor"
                className=""
                draggable="false"/>
                
            </motion.div>

            <motion.div
                className="absolute left-[400px] top-[350px] opacity-75 hidden sm:hidden md:hidden lg:block"
                animate={{ y: [0, 5, 0] }}  // Vertical movement
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth continuous animation
            >
                <Image
                src={nodelogo}
                height="120"
                width="110"
                alt="cursor"
                className=""
                draggable="false"/>
                
            </motion.div>

            <motion.div
                className="absolute right-[400px] top-[350px] opacity-75 hidden sm:hidden md:hidden lg:block"
                animate={{ y: [0, 5, 0] }}  // Vertical movement
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth continuous animation
            >
                <Image
                src={dblogo}
                height="130"
                width="150"
                alt="cursor"
                className=""
                draggable="false"/>
                
            </motion.div>

            <p className="text-center text-2xl max-w-[600px] mx-auto mt-8 text-white/80 hidden sm:hidden md:hidden lg:block">
            I'm a full-stack developer and cloud enthusiast, transforming innovative ideas into impactful solutions for the global users.
            </p>

            <Image
                src={profilepic}
                alt="profile picture"
                className="h-auto w-auto mx-auto"/>

        </div>
    </div>
        
  )
}

export default Hero