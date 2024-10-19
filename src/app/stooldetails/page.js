import Image from 'next/image';

export default function StoolDetails() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="relative">
        {/* Background Image */}
        <div className="hidden md:block absolute top-0 right-0 w-1/3">
          <Image src="/stbg.png" alt="Background" width={530} height={326} />
        </div>

        <div className="flex flex-wrap">
          {/* Empty Box for spacing on large screens */}
          <div className="hidden md:block w-full md:w-8/12 h-16"></div>

          {/* Main Content */}
          <div className="w-full md:w-8/12">
            {/* Big Image */}
            <div className="flex justify-center items-center mt-12">
              <Image src="/sbm.png" alt="Stool" width={530} height={326} className="w-full md:w-1/2" />
            </div>

            {/* Small Images */}
            <div className="flex justify-evenly items-center mt-3 sm:mt-10">
              <Image src="/S1.png" alt="Stool Small" width={150} height={150} className="w-1/4 md:w-1/6" />
              <Image src="/S1.png" alt="Stool Small" width={150} height={150} className="w-1/4 md:w-1/6" />
              <Image src="/S1.png" alt="Stool Small" width={150} height={150} className="w-1/4 md:w-1/6" />
            </div>
          </div>

          {/* Empty Box 2 for spacing */}
          <div className="hidden md:block w-full h-12"></div>

          <div className="w-full md:w-auto text-center md:text-left mt-6 mb-2 text-sm md:text-xl font-sans font-medium tracking-wide md:tracking-[12px]">
            Parquetry Dining Table With Spider Leg (Tube 7.5 x7.5)
          </div>
          <div className="w-full md:w-auto text-center md:text-left mt-1 mb-6 text-xs sm:text-[14px] tracking-widest capitalize">
            <ul className='ml-4'>
              <li className='md:list-disc md:marker:text-[9px]'>
                <span className="font-medium text-sm md:text-[16px]">material</span> : acacia / iron . <span className="font-medium text-sm md:text-[16px] ml-4">finish</span> : espresso
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

