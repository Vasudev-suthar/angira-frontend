"use client"
import { useState } from "react"; 
import { IoIosArrowDown } from "react-icons/io";  
import Link from 'next/link'
import Image from "next/image";

export default function Metalleg () {
  const [openDropdown, setOpenDropdown] = useState(null);
  // Toggle dropdown function
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleOptionClick = () => {
    setOpenDropdown(null); // Close the dropdown by setting it to null
  };

  const images = [
    { id: 1, src: "/mt1.png", alt: "Image 1" },
    { id: 2, src: "/mt2.png", alt: "Image 2" },
    { id: 3, src: "/mt3.png", alt: "Image 3" },
    { id: 4, src: "/mt4.png", alt: "Image 4" } 
  ];

  return (
    <div className='2xl:container my-5 mx-auto px-4 sm:px-8'>
      <div className="flex flex-wrap mt-3">
          <div className="w-full lg:w-6/12 shadow-[100px_0px_50px_15px_white]">
            <div className="hidden lg:block h-[85px]"></div>
            <div className="flex justify-center font-thin text-3xl sm:text-4xl tracking-wide sm:tracking-[12px]">
            Metal Leg
            </div>
            <p className="text-center font-thin text-xs sm:text-lg mt-4 mb-4 lg:mb-16 tracking-[1.88px] capitalize leading-[1.7]">
            Explore our extensive collection of metal dining legs, scrupulously crafted to complement a variety of dining tops. Elevate your space with these exquisite leg designs.
            </p>
          </div>
          <div className="w-full lg:w-6/12 flex items-center -z-10">
            <Image
              src="/metalleg.png"
              alt="Dining Table"
              className="w-full"
              width={500}
              height={500} 
            />
          </div>
        </div>

 
      <div className="my-4 px-auto grid grid-cols-2 xl:grid-cols-4 text-center">
      {[ 'Leg Material', 'Leg Finish', 'Category', 'Knocked Down'].map((label) => (
        <div key={label} className="relative flex justify-center">
          {/* Button */}
          <button onClick={() => toggleDropdown(label)} className="inline-flex justify-between items-center py-2  focus:outline-none text-xs sm:text-base" > {label} <IoIosArrowDown /> </button>

          {/* Dropdown */}
          {openDropdown === label && (
            <div className="flex flex-col items-center absolute mt-10 w-24 z-10 sm:w-32 bg-white border border-gray-200 rounded-md shadow-lg">
              <a href="#" onClick={handleOptionClick} className="block sm:px-4 py-2 text-gray-800 hover:bg-gray-200"> Option 1 </a>
              <a href="#" onClick={handleOptionClick} className="block sm:px-4 py-2 text-gray-800 hover:bg-gray-200">  Option 2</a>
              <a href="#" onClick={handleOptionClick} className="block sm:px-4 py-2 text-gray-800 hover:bg-gray-200">  Option 3</a>
              <a href="#" onClick={handleOptionClick} className="block sm:px-4 py-2 text-gray-800 hover:bg-gray-200">  Option 4</a>
            </div>
          )}
        </div>
      ))}
    </div>
    <div>
      <div className=" grid gap-4 md:gap-6 grid-cols-2 ">
      {images.map((image) => (
        <Link key={image.id} href="/metallegdetails" className="flex flex-col items-center justify-center border p-1 md:p-4 h-36 sm:h-44 md:h-56 lg:h-64 xl:h-72 2xl:h-80 text-center hover:scale-105 transition-transform" >
          <div className="flex-grow flex items-center justify-center">
          <img src={image.src} alt={image.alt} className="w-3/4 mx-auto" />
          </div>
          <div className=" text-xs sm:text-[17px] sm:tracking-[3px] mt-auto">Product Name</div>
        </Link>
      ))}
      </div>
    </div>
    </div>
  )
}