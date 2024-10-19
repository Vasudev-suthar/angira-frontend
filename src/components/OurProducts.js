import Image from 'next/image';
import Link from 'next/link';

export default function OurProducts() {
  return (
    <div className="block bg-white pb-8">

      {/* Title */}
      <div className="flex justify-center items-center bg-[#F4F3F0] h-10 sm:h-20 mt-8 w-44 sm:w-96">
        <p className="text-lg sm:text-[27px] font-normal tracking-wider sm:tracking-[7.2px]">Our Products</p>
      </div>

      <div className="mt-6 flex flex-col md:flex-row w-full px-6 xs:px-10 sm:px-16 gap-5 md:gap-8">
          {/* Left Column */}
          <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-8">
            <div>
              <p className="text-xs sm:text-[17px] leading-6 sm:leading-8 tracking-wider capitalize break-words">Dive into the exquisite realm of our meticulously crafted product categories, where each piece embodies the artistry of expert craftsmanship. Here, the warm embrace of natural wood seamlessly merges with the sturdy grace of iron, creating furniture that transcends ordinary standards.
              </p> 
            </div>            
            {/* Dining Table */}
            <div className="text-center md:text-left mb-3 md:mb-5 relative">
              <Link href="/diningtable">
                <Image src="/dining.png" width="530" height="326" className="w-full lg:w-[530px]" alt="Dining Table" />
                <button className="bg-white border border-[#766554] px-4 py-1 xl:py-1.5 md:text-base absolute bottom-[-12px] md:bottom-[-20px] left-10 tracking-widest text-[#766554]"><span className='text-xl'>Dining Table</span></button>
              </Link>
            </div>

            {/* Stool */}
            <div className="relative">
              <Link href="/stool" className="text-end ">
                <Image src="/stool.png" width="385" height="300" className="md:ms-auto w-full lg:w-[400px] h-[210px] sm:h-[280px]" alt="Stool" />
                <button className="bg-white text-xs md:text-base border border-[#766554] px-4 py-1 xl:py-1.5 absolute bottom-[20px] left-0 md:left-0 lg:left-[80px] xl:left-[210px] 2xl:left-[380px] tracking-widest text-[#766554]"><span className='text-xl'>Stool</span></button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-5 lg:gap-16 xl:gap-0">
            {/* Coffee Table */}
            <div className="text-center relative">
              <Link href="/coffeetable" className="">
                <Image src="/coffeetable.png" width="388" height="300" className="ms-auto w-full lg:w-[400px] h-[210px] sm:h-[280px]" alt="Coffee Table" />
                <button className="text-xs md:text-base bg-white border border-[#766554] px-4 py-1 md:py-1.5 absolute bottom-[20px] left-0 sm:left-[80%] md:left-[-40px] tracking-widest text-[#766554]"><span className='text-xl'>Coffee Table</span></button>
              </Link>
            </div>

            {/* Metal Leg */}
            <div className="relative md:mt-16">
              <Link href="/metalleg">
                <Image src="/metalleg.png" width="530" height="300" className="w-full" alt="Metal Leg" />
                <button className="text-xs md:text-base bg-white border border-[#766554] px-4 py-2 md:py-1.5 absolute bottom-[-20px] right-10 md:right-[20px] tracking-widest text-[#766554]"><span className='text-xl'>Metal Leg</span></button>
              </Link>
            </div>
          </div>
        </div> 
    </div>
  );
}
