"use client"

// FeaturedProducts.js
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import React, { useState } from 'react';

export default function FeaturedProducts() {
  const images = ["/DT1.png", "/DT2.png", "/DT3.png", "/DT4.png", "/DT5.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="block bg-[#F4F3F0] w-full overflow-x-hidden h-[100vh] sm:h-auto pb-9 sm:pb-20 xl:pb-28">

      {/* Title */}
      <div className="flex justify-center items-center bg-white h-10 sm:h-20 mt-8 ml-5 w-52 sm:w-[480px]">
        <p className="text-lg sm:text-[27px] font-normal tracking-wider sm:tracking-[7.2px]">Featured Products</p>
      </div>

      {/* Description  */}
      <div className="mt-6 px-4 sm:px-8 lg:px-20 w-full md:w-[870px]">
        <p className="text-xs sm:text-[18px] leading-6 sm:leading-8 tracking-wider capitalize break-words">
          Welcome To Our Featured Products Section, Here We Proudly Present This Collection Of True Gems
          That Transcend Ordinary Expectations And Redefine The Very Essence Of Excellence.
        </p>
      </div>

      <div>
        <div className="w-full relative">
          <div className='flex justify-between items-center pt-16 sm:pt-10 pb-5'>
            {/* Left White Circle with Previous Image */}
            <div className="justify-between items-center rounded-full bg-white w-[26vw] md:w-[340px] h-[26vw] md:h-[340px] cursor-pointer -ml-[13.5%] hidden lg:flex">
              <Image
                src={images[prevIndex]}
                width={400}
                height={400}
                alt='Previous Image'
                className="max-w-none  cursor-pointer hidden lg:block z-20 opacity-50"
              />
            </div>

            {/* Main Image with Arrows */}
            <div className="flex justify-between items-center mx-auto md:px-0">
              <BsArrowLeft
                className="relative left-3 text-4xl sm:text-5xl bg-[#dddbd6] text-[#766554] rounded-full p-2 opacity-70 cursor-pointer"
                onClick={prevImage}
              />

              <div className="flex justify-between items-center rounded-full bg-white w-[55vw] md:w-[500px] h-[55vw] md:h-[500px] cursor-pointer z-10">
                <Image
                  src={images[currentIndex]}
                  width={180}
                  height={100}
                  alt='Current Image'
                  className="block xs:hidden sm:max-w-none cursor-pointer z-20 mx-auto"
                />
                <Image
                  src={images[currentIndex]}
                  width={400}
                  height={200}
                  alt='Current Image'
                  className="hidden xs:block sm:hidden sm:max-w-none cursor-pointer z-20 mx-auto"
                />
                <Image
                  src={images[currentIndex]}
                  width={500}
                  height={300}
                  alt='Current Image'
                  className="hidden sm:block lg:hidden max-w-none cursor-pointer z-20 mx-auto"
                />
                <Image
                  src={images[currentIndex]}
                  width={500}
                  height={300}
                  alt='Current Image'
                  className="hidden lg:block max-w-none cursor-pointer z-20 mx-auto"
                />
              </div>

              <BsArrowRight
                className="relative right-3 text-4xl sm:text-5xl bg-[#dddbd6] text-[#766554] rounded-full p-2 opacity-70 cursor-pointer"
                onClick={nextImage}
              />
            </div>

            {/* Right White Circle with Next Image */}
            <div className="justify-between items-center rounded-full bg-white w-[26vw] md:w-[340px] h-[26vw] md:h-[340px] cursor-pointer -mr-[13.5%] hidden lg:flex">
              <Image
                src={images[nextIndex]}
                width={400}
                height={400}
                alt='Next Image'
                className="max-w-none cursor-pointer hidden lg:block z-20 opacity-50"
              />
            </div>
          </div>

          <div className='w-full self-end flex justify-center mt-2'>
            <p className='tracking-[10px] text-[#766554] text-sm xs:text-lg sm:text-2xl font-normal'>Product Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
