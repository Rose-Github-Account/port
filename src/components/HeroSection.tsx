import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import Button from './Button';

function HeroSection() {
  return (
    <>
      <section className='bg-[#E8DED1] w-full text-center pt-[7.5rem]'>
        <p className='text-[2rem] text-[#3E3E3E]'>Hey! I'm <span className='text-[#B89F8B]'>Aqdas Nida</span></p>

        <p className='text-[2rem] text-[#3E3E3E]'>
          <span className='text-[#B89F8B]'>I</span>'m <span className='text-[#B89F8B]'>A F</span>ront <span className='text-[#B89F8B]'>E</span>nd <span className='text-[#B89F8B]'>W</span>eb <span className='text-[#B89F8B]'>D</span>eveloper
        </p>

        <p className='mt-[1.25rem] mb-[2rem] text-[1.125rem] text-[#3E3E3E]'>
          I can build user interface for websites and applications with <span className='text-[#B89F8B]'>React JS</span> and <span className='text-[#B89F8B]'>Next.Js</span>
          <br />I love front end development.
        </p>

        <Button textName={"Hire Me"} />

        <div className='mt-[3.125rem] m-auto sm:w-[60%] lg:w-[30%] lg:px-[1.5rem] py-1 flex gap-[3.125rem] justify-center items-center lg:h-[52px] bg-[#A9927D] rounded-full'>
          <FaFacebookF size={30} color='#3E3E3E' className='cursor-pointer'/>
          <FaXTwitter size={30} color='#3E3E3E' className='cursor-pointer'/>
          <FaInstagram size={30} color='#3E3E3E' className='cursor-pointer'/>
          <IoLogoWhatsapp size={30} color='#3E3E3E' className='cursor-pointer'/>
          <FaTelegramPlane size={30} color='#3E3E3E' className='cursor-pointer'/>
        </div>

        <div className='mt-[70px] w-full bg-[#B89F8B] h-[78px] flex justify-evenly items-center'>
          <Image src={"/myImage/behance.png"} alt='picture' width={156} height={52} className='cursor-pointer' />
          <Image src={"/myImage/dribble.png"} alt='picture' width={156} height={52} className='cursor-pointer' />
          <Image src={"/myImage/upwork.png"} alt='picture' width={156} height={52} className='cursor-pointer' />
          <Image src={"/myImage/freelance.png"} alt='picture' width={156} height={52} className='cursor-pointer' />
        </div>
      </section>
    </>
  )
}

export default HeroSection;