"use client"

// components/Homepage.js

import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { MdClose, MdMenu } from 'react-icons/md'
import { useRouter } from 'next/navigation';

export default function Homepage() {

  const [showSearch, setShowSearch] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const router = useRouter();

  const navigateToProducts = () => {
    router.push('/ourproducts');
  };

  return (
    <div className="flex">

      {/* Sidebar for Desktop */}
      <div className="hidden sm:flex flex-col justify-center bg-white w-[40px] lg:w-[70px] h-[924px]">
        <ul className=" flex justify-center list-disc transform -rotate-90 text-center space-x-12 text-[#766554] text-lg lg:text-xl font-semibold">
          <li className=" list-none">Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>


      <div className="flex-grow flex-col md:flex-row bg-cover sm:bg-center h-[807px] sm:h-[924px] sm:bg-[url('/bg.png')]">

        {/* Main Container */}

        <div className="flex-1 px-0">

          {/* Navbar for Mobile */}
          <div className=" sm:hidden bg-[#F4F3F0] h-[120px] flex items-center justify-between px-4">
            <img className="h-[90px] w-[96px]" src="/logo.png" alt="Logo" />
            <div className="flex flex-col mt-5 w-64 xxs:ml-2 ml-0 xs:w-72">
              <div className="flex flex-col items-center py-2 rounded bg-white border border-[#766554]">
                <ul className="flex justify-center xxs:space-x-5 xs:space-x-10 text-[#766554] text-xs font-semibold list-disc">
                  <li className="list-none">Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </ul>
              </div>
              <div className=" flex items-center justify-end relative mt-2 w-full">
                <form className='flex w-full px-4 text-[12px] border border-[#766554] bg-white rounded' role="search">
                  <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="focus:outline-none orm-input w-full p-0.5"
                  />
                  <button className="text-sm text-[#766554]"
                    type="submit" ><IoMdSearch /></button>
                </form>
                <div className="flex items-center text-2xl pl-2 rounded-full md:hidden cursor-pointer" onClick={() => setToggleIcon(!toggleIcon)}>
                  {toggleIcon ? <MdClose className='text-[#766554]' /> : <MdMenu className='text-[#766554]' />}
                </div>
              </div>
            </div>
          </div>

          {/* Right-side Menu for Mobile */}
          {toggleIcon && (
            <div className=" sm:hidden absolute top-28 right-0 w-36 h-auto bg-white shadow-lg z-50 transition-transform transform translate-x-0">
              <ul className="flex flex-col items-center p-2 space-y-4 text-[#766554] text-sm font-semibold">
                <li><Link href="#" onClick={() => setToggleIcon(false)}>Home</Link></li>
                <li><Link href="/featuredproducts" onClick={() => setToggleIcon(false)}>Featured Products</Link></li>
                <li><Link href="/ourproducts" onClick={() => setToggleIcon(false)}>Products</Link></li>
                <li><Link href="#about-us" onClick={() => setToggleIcon(false)}>About Us</Link></li>
                <li><Link href="#contact-us" onClick={() => setToggleIcon(false)}>Contact Us</Link></li>
              </ul>
            </div>
          )}

          {/* Navbar for Desktop */}
          <div className="hidden sm:flex items-center justify-between mt-[15px] px-4">
            <div className="flex items-center justify-center bg-white w-[100px] md:w-[130px] lg:w-[175px] h-[85px] md:h-[135px] lg:h-[170px] -mx-12 lg:-mx-16 self-start">
              <Image src="/logo.png" width={157} height={146} alt="Logo" className="hidden lg:block" />
              <Image src="/logo.png" width={122} height={121} alt="Logo" className=" hidden md:block lg:hidden" />
              <Image src="/logo.png" width={82} height={81} alt="Logo" className=" block md:hidden" />
            </div>


            <nav className="flex flex-col items-center justify-center rounded-md bg-white h-auto w-[500px] md:w-[550px] lg:w-[650px] xl:w-[850px] text-gray-600 lg:mr-12 lg:mb-8">
              <ul className="flex items-center justify-center space-x-7 xl:space-x-11 py-3 lg:py-6 h-full md:h-auto rounded-lg text-[10px] md:text-xs lg:text-sm xl:text-lg uppercase font-normal text-gray-600">
                <li><Link href="#" className="hover:font-semibold hover:text-black">Home</Link></li>
                <li><Link href="#featured-products" className="hover:font-semibold hover:text-black">Featured Products</Link></li>
                <li><Link href="#our-products" className="hover:font-semibold hover:text-black">Products</Link></li>
                <li><Link href="#about-us" className="hover:font-semibold hover:text-black">About Us</Link></li>
                <li><Link href="#contact-us" className="hover:font-semibold hover:text-black">Contact Us</Link></li>
                <li className="nav-item rounded-full cursor-pointer lg:ml-4 hidden sm:block" onClick={() => setShowSearch(!showSearch)} >
                  {showSearch ? (<MdClose className="text-2xl" />) : (<IoMdSearch className="text-2xl" />)}</li>
              </ul>

              {showSearch && (
                <form className="flex mt-2 pt-1 pb-3 mb-2 px-5 lg:px-9 bg-white lg:mt-0 w-full" role="search">
                  <input className="form-input w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="search" placeholder="Search" aria-label="Search" />
                  <button className="ml-2 btn bg-[#948473] text-white px-4 py-2 rounded-md text-sm hover:bg-[#493d32]"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              )}
            </nav>
          </div>


          {/* Content */}
          <div className=" hidden mt-64 sm:flex justify-center items-center font-normal">
            {/* Desktop Content */}
            <div className="hidden sm:flex">
              <p className="text-black text-4xl md:text-[40px] tracking-widest sm:flex sm:flex-col sm:items-center lg:flex-row lg:items-start">
                Defining Perfection Since
                <span className=" relative lg:bottom-5">
                  <span className="pl-4 text-4xl md:text-[50px] font-semibold tracking-widest">200</span>
                  <span className="relative bottom-[-6.5px] text-5xl md:text-[60px] font-semibold">5...</span>
                </span>
              </p>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="bg-cover bg-[url('/mobbg.jpg')] filter brightness-110 h-[686px] sm:hidden">
            <div className="flex flex-col items-center pt-56">
              <div className=" ml-32">
                <p className="text-black text-xl tracking-widest font-normal leading-tight">
                  Defining Perfection Since
                </p>
                <p className=" tracking-widest leading-tight">
                  <span className="text-xl font-semibold">200</span>
                  <span className="text-[24px] font-semibold relative top-[3px] ">5<span className="font-thin">...</span></span>
                </p>
              </div>
              <button
                onClick={navigateToProducts}
                className="mt-12 h-10 w-40 border border-[#766554] rounded-full text-[#766554] font-normal text-[23px]">
                PRODUCTS
              </button>
            </div>
            <SlArrowRight className=" absolute w-10 h-10 right-2 mt-14 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
