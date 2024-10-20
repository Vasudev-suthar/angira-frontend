// components/MetalLegDetail.js

import Image from 'next/image';

export default function MetalLegDetail() {
    return (
        <div className="2xl:container px-4 sm:px-8 mx-auto">
            <div className="relative">
                {/* Background Image */}
                <div className="hidden md:block absolute top-0 right-0 w-1/3">
                    <Image src="/mtbg.png" width={400} height={600} alt="Background" />
                </div>

                <div className="flex flex-wrap">
                    {/* Empty Space */}
                    <div className="hidden md:block md:w-8/12 h-20"></div>

                    {/* Main Content */}
                    <div className="w-full md:w-8/12">
                        {/* Large Image */}
                        <div className="flex justify-center items-center mt-12">
                            <Image src="/mtbm.png" width={600} height={400} alt="Metal Leg Big" className="w-full md:w-4/5" />
                        </div>

                        {/* Small Images */}
                        <div className="flex justify-evenly items-center mt-8 sm:mt-20">
                            <Image src="/mt1.png" width={300} height={200} alt="Metal Leg Small 1" className="w-1/4" />
                            <Image src="/mt3.png" width={150} height={200} alt="Metal Leg Small 2" className="w-1/4" />
                        </div>
                    </div>

                    {/* Empty Box 2 for spacing */}
                    <div className="hidden md:block w-full h-12"></div>


                    {/* Text Content */}
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
