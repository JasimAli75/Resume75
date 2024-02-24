"use client";
import React, {useState,useEffect} from 'react'
import Link from 'next/link'
import { Link } from 'react-scroll';
import {AiOutlineClose, AiOutlineMenu, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import {GrLinkedinOption} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'
import Image from 'next/image'




export default function NevBar() {


const [nav, setNav] = useState(false);
const [shadow, setShadow] = useState(false);

const handleNav = () => {
  setNav(!nav);
};

useEffect (() => {
  const handleShadow = () => {
    if (window.scrollY >=90 ) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  window.addEventListener('scroll', handleShadow);
}, [])



  return (
    <div className={ shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
<Link href={'/'}>
            <Image 
          src="/../public/Images/ccc.png"
          alt='portfolio logo'
          width='100'
          height='20'
          />
            </Link>
            <div>
            <ul className='hidden md:flex'>
                <Link href={'/'}>
                <li className='ml-10 text-base uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'>
                <li className='ml-10 text-base uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'>
                <li className='ml-10 text-base uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#contact'>
                <li className='ml-10 text-base uppercase hover:border-b'>Contact</li>
                </Link>
              </ul>
              <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu size={25}/>
              </div>
            </div>
    </div>
        <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          {/* Side Drawer Menu */}
          <div className={nav? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
              <div>
                <div className='flex w-full items-center justify-between'>
                < Image src="/../public/Images/ccc.png"
          alt='portfolio logo'
          width='60'
          height='5'/>
          <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 curs'>
          <AiOutlineClose/>
          </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                <p className='[w-85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                </div>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                <Link href={"/"}>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href={"/"}>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href={"/"}>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href={"/"}>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
                </ul>
                <div className='pt-40'>
                <p className='uppercase -tracking-tighter text-[#5651e5]'>Let's Connect</p>
                <div className='flex items-center justify-evenly my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <GrLinkedinOption/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiFillGithub/>
              </div><div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <BsWhatsapp/>
              </div>
                </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
