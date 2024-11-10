'use client'
import React from 'react'
import { caveat } from '@/font'
import Link from 'next/link'
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function ShowOption() {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sticky top-0'>
      <header className='relative w-full h-auto p-[1.5rem_1rem] bg-[#F3F3F3] shadow-sm shadow-[#B1978C]'>
        <nav className='h-[2.25rem] mx-[1.6875rem] flex justify-between'>
          <div>
            <Link href='/'>
              <p className={`${caveat.className} text-[1.875rem] font-semibold text-[#2D2D2D]`}>
                <span className='text-[#B89F8B]'>A</span>qdas
                <span className='text-[#B89F8B]'>N</span>ida
              </p>
            </Link>
          </div>

          {isOpen ? (
            <div>
              <ul className='absolute p-[40px] top-0 left-0 w-full h-screen bg-[#F3F3F3] flex flex-col items-center justify-center gap-[1.875rem]'>
                <IoClose className='absolute top-0 right-0 mr-[40px] mt-[30px] cursor-pointer' size={35} onClick={ShowOption} />
                {['Home', 'About', 'Portfolio', 'Services', 'Testimonials', 'Contact'].map((item, index) => (
                  <Link href={`#${item.toLowerCase()}`} key={index}>
                    <li className='text-[1.125rem] text-[#2D2D2D] font-semibold tracking-[.0563rem] hover:text-[#B1978C]'>{item}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : (
            <ul className='hidden lg:h-full lg:flex lg:items-center lg:gap-[1.875rem]'>
              {['Home', 'About', 'Portfolio', 'Services', 'Testimonials', 'Contact'].map((item, index) => (
                <Link href={`#${item.toLowerCase()}`} key={index}>
                  <li className='text-[1.125rem] text-[#2D2D2D] tracking-[.0563rem] hover:text-[#A9927D]'>{item}</li>
                </Link>
              ))}
            </ul>
          )}

          <IoMenu size={35} color='#2D2D2D' className='lg:hidden cursor-pointer' onClick={ShowOption} />
        </nav>
      </header>
    </div>
  )
}

export default Navbar;