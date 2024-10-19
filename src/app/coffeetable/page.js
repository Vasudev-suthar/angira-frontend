"use client"
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link'
import Image from "next/image";

export default function Coffeetable() {

  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleOptionClick = () => {
    setOpenDropdown(null); // Close the dropdown by setting it to null
  };

  const images = [
    { id: 1, src: "/ct1.png", alt: "Image 1" },
    { id: 2, src: "/ct2.png", alt: "Image 2" },
    { id: 3, src: "/ct3.png", alt: "Image 3" },
    { id: 4, src: "/ct1.png", alt: "Image 4" },
    { id: 5, src: "/ct2.png", alt: "Image 5" },
    { id: 6, src: "/ct3.png", alt: "Image 6" },
  ];
  return (
    <div className='container my-5 mx-auto px-4'>
      <div className="flex flex-wrap mt-3">
        <div className="w-full lg:w-6/12 shadow-[100px_0px_50px_15px_white]">
          <div className="hidden lg:block h-[85px]"></div>
          <div className="flex justify-center font-thin text-3xl sm:text-4xl tracking-wide sm:tracking-[12px]">
            COFFEE TABLE
          </div>
          <p className="text-center font-thin text-xs sm:text-lg mt-4 mb-4 lg:mb-16 tracking-[1.88px] capitalize leading-[1.7]">
            Delve into a curated selection of the finest coffee table designs, meticulously crafted to elevate your living space, offering visual appeal and functionality that enhances your daily living experience.
          </p>
        </div>
        <div className="w-full lg:w-6/12 flex items-center justify-end -z-10">
          <Image
            src="/coffeetable.png"
            alt="Dining Table"
            className="sm:w-[90%] sm:h-[320px]"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Dropdown Section */}
      <div className="my-4 px-auto grid grid-cols-3 xl:grid-cols-6 text-center xl:text-start">
        {['Top Material', 'Leg Material', 'Top Finish', 'Leg Finish', 'Category', 'Knocked Down'].map((label) => (
          <div key={label} className="relative flex justify-center">
            {/* Button */}
            <button onClick={() => toggleDropdown(label)} className="inline-flex justify-between items-center py-2  focus:outline-none text-sm sm:text-base" > {label} <IoIosArrowDown /> </button>

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

      {/* Items Grid */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 md:gap-6">
        {images.map((image) => (
          <Link key={image.id} href="/coffeetabledetails" className="flex flex-col items-center justify-center border p-1 md:p-4 h-36 sm:h-40 md:h-44 lg:h-56 xl:h-64 2xl:h-80 text-center hover:scale-105 transition-transform" >
            <div className="flex-grow flex items-center justify-center">
            <img src={image.src} alt={image.alt} className="w-3/4 mx-auto" />
            </div>
            <div className=" text-xs sm:text-[17px] tracking-[3px] mt-auto">Product Name</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
