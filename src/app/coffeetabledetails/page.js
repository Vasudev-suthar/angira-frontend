import Image from 'next/image';

export default function CoffeeTableDetails() {
    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="relative">
                {/* Background Image */}
                <div className="hidden md:block absolute top-0 right-0 w-1/3">
                    <Image src="/ctbg.png" alt="Background" width={400} height={500} />
                </div>

                <div className="flex flex-wrap">
                    {/* Empty Box for Spacing */}
                    <div className="hidden md:block w-full md:w-8/12 h-16"></div>

                    {/* Coffee Table Images */}
                    <div className="w-full md:w-8/12">
                        <div className="flex justify-center items-center mt-10 md:mt-12">
                            <Image src="/ctbm.png" alt="Coffee Table" width={600} height={400} className="w-full md:w-[70%]" />

                        </div>

                        {/* Small Images */}
                        <div className="flex justify-evenly items-center mt-8 sm:mt-14">
                            <Image src="/ct1.png" alt="Front View" width={150} height={150} className="w-1/4 md:w-auto" />
                            <Image src="/ct1.png" alt="Side View" width={150} height={150} className="w-1/4 md:w-auto" />
                        </div>
                    </div>



                    {/* Empty Box 2 for spacing */}
                    <div className="hidden md:block w-full h-12"></div>

                    {/* Text Box */}
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

