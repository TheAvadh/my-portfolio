import React from 'react'
import Image from "next/image"
import phone from '../assets/call.png'
import mail from '../assets/email.png'
import linkedin from '../assets/linkedin.png'
import { PiCalendarSlash } from 'react-icons/pi'
import { ImLinkedin } from 'react-icons/im'


const Contact = () => {
  return (
    <div className='max-w-[1010px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-x-8 id="contact'>

        <div className='flex justify-center items-center'>
            <ul className='space-y-4 lg:space-y-0 lg:flex lg:space-x-8'>
                <li className='flex items-center'>
                    <Image src = {phone} alt= "phone" className='h-[100px] w-auto mr-6'/>
                    <p className='text-xl'>+1 782-882-2340</p>
                </li>
                <li className='flex items-center'>
                    <Image src = {mail} alt= "Email" className='h-[90px] w-auto mr-6'/>
                    <p className='text-xl'>avadhrakholiya@gmail.com</p>
                </li>
                <li className='flex items-center'>
                    <Image src = {linkedin} alt= "Email" className='h-[110px] w-auto mr-6'/>
                    <a href={"https://www.linkedin.com/in/avadh-rakholiya-b758a0201/</li>"} className='text-xl'>Avadh</a>
                </li>
            </ul>
        </div>

        {/* <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
            <h2 className='text-5xl font-bold text-blue-400 mb-4'>Let's Connect</h2>
            <p className='text-white/70 mb-6'> Send me a message and lets schedule a call</p>
            <form className='space-y-4'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='First Name'/>
                    <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='Last Name'/>
                    <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='Email'/>
                    <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='Phone'/>
                </div>
                <textarea className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='Your Message'/>
                <button className='bg-blue-700 hover:bg-blue-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
            </form>

        </div> */}
    </div>
  )
}

export default Contact