"use client";

import React, { useState } from 'react'
import Image from "next/image"
import phone from '../assets/call.png'
import mail from '../assets/email.png'
import linkedin from '../assets/linkedin.png'
import { PiCalendarSlash } from 'react-icons/pi'
import { ImLinkedin } from 'react-icons/im'


const Contact = () => {

    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    otp: "",
  });

  const [status, setStatus] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendOtp = async () => {
    setStatus("Sending OTP...");

    try {
      const response = await fetch("https://lxxv6thzkg.execute-api.us-east-2.amazonaws.com/Development", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "sendOtp", email: formData.email }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("OTP sent successfully! Please check your spam if not in inbox");
        setOtpSent(true);
      } else {
        setStatus(result.error || "Failed to send OTP");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("https://lxxv6thzkg.execute-api.us-east-2.amazonaws.com/Development", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submitForm", ...formData }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          otp: "",
        });
        setOtpSent(false);
      } else {
        setStatus(result.error || "Failed to send the message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    
    <div className="max-w-[1010px] mx-auto flex flex-col text-white/70 p-8 rounded-lg space-y-8" id="contact">
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-8">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[100px] w-auto mr-6" />
            <p className="text-xl">+1 782-882-2340</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="Email" className="h-[90px] w-auto mr-6" />
            <p className="text-xl">avadhrakholiya@gmail.com</p>
          </li>
          <li className="flex items-center">
            <a href={"https://www.linkedin.com/in/avadh-rakholiya-b758a0201/"} className="flex items-center space-x-4">
              <Image src={linkedin} alt="LinkedIn" className="h-[110px] w-auto" />
              <span className="text-xl whitespace-nowrap">Avadh Rakholiya</span>
            </a>
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
    

    <div className="bg-white/10 p-6 rounded-xl max-w-[550px] mx-auto">
        <h2 className="text-5xl font-bold text-blue-400 mb-4">Let&apos;s Connect</h2>
        <p className="text-white/70 mb-6">Send me a message and let&apos;s schedule a call</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="First Name"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Last Name"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Phone"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Message"
            required
          />
          {otpSent && (
            <input
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter OTP"
              required
            />
          )}
          {!otpSent ? (
            <button
              type="button"
              onClick={handleSendOtp}
              className="bg-blue-700 hover:bg-blue-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
            >
              Send OTP
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
            >
              Submit
            </button>
          )}
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  )
}

export default Contact

