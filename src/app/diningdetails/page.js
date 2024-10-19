// components/DiningDetails.js
import Image from 'next/image';

export default function DiningDetails() {
    return (
        <div className='bg-gray-100 overflow-x-hidden'>
            <div className='container bg-white px-4 mx-auto pt-10 md:pt-20 pb-3'>
                <div className=" flex flex-col md:flex-row w-full md:items-center justify-around lg:justify-start ">
                    <div className="order-2 md:order-1  w-full md:w-1/6 md:h-full">
                        <div className='h-full flex mt-10 md:mt-0 md:flex-col items-center justify-between md:gap-20'>
                            <Image src={"/displayds.png"} width={"175"} height={"145"} alt='' className='hidden md:block' />
                            <Image src={"/displayds.png"} width={"175"} height={"145"} alt='' className='hidden md:block' />
                            <Image src={"/displaydf.png"} width={"175"} height={"145"} alt='' className='hidden md:block' />

                            {/* for small screen  */}
                            <Image src={"/displayds.png"} width={80} height={100} alt='' className='block md:hidden' />
                            <Image src={"/displayds.png"} width={80} height={100} alt='' className='block md:hidden' />
                            <Image src={"/displaydf.png"} width={80} height={100} alt='' className='block md:hidden' />
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="order-1 md:order-2 flex items-center justify-center w-full md:w-3/5 md:h-2/3">
                        <Image src={"/DTMAIN.png"} width={780} height={410} alt='' className='max-w-none w-[250px] h-[150px] md:w-[500px] md:h-[200px] lg:h-[300px] lg:w-[700px]' />
                    </div>

                    {/* Detail Section */}
                    <div className=" absolute right-0 w-5/12 hidden xl:block">
                        <Image src={"/diningbg.png"} width={520} height={600} alt='' className='max-w-none h-[1000px]' />
                    </div>
                </div>
                <div className="w-full md:w-auto text-center md:text-left mt-10 mb-2 lg:mt-32 text-sm md:text-xl font-sans font-medium tracking-wide md:tracking-[12px]">
                    Parquetry Dining Table With Spider Leg (Tube 7.5 x7.5)
                </div>
                <div className="w-full md:w-auto text-center md:text-left mt-1 text-xs tracking-widest capitalize">
                    <ul className='ml-4'>
                        <li className='md:list-disc md:marker:text-[9px]'>
                            <span className="font-medium text-sm md:text-[16px]">material</span> : acacia / iron . <span className="font-medium text-sm md:text-[16px] ml-4">finish</span> : espresso
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container flex flex-col gap-6 md:gap-10 lg:gap-16 bg-white px-4 mx-auto pt-6 sm:pt-10 lg:pt-20 border-t border-gray-400'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <Image src="/top1.png" alt='' width={"100"} height={"50"} className='w-[50px] h-[25px] md:w-[100px] md:h-[50px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Rectanguler Top</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/top2.png" alt='' width={"100"} height={"50"} className='w-[50px] h-[25px] md:w-[100px] md:h-[50px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Oval Top</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/top3.png" alt='' width={"100"} height={"50"} className='w-[50px] h-[25px] md:w-[100px] md:h-[50px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Danish Top1</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/top4.png" alt='' width={"100"} height={"50"} className='w-[50px] h-[25px] md:w-[100px] md:h-[50px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Danish Top2</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/top5.png" alt='' width={"100"} height={"50"} className='w-[50px] h-[25px] md:w-[100px] md:h-[50px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Capsule Top</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/top6.png" alt='' width={"100"} height={"50"} className='w-[50px] h-[25px] md:w-[100px] md:h-[50px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Pebble Top</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/top7.png" alt='' width={"50"} height={"50"} className='w-[25px] h-[25px] md:w-[50px] md:h-[50px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Round Top</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/top8.png" alt='' width={"50"} height={"50"} className='w-[25px] h-[25px] md:w-[50px] md:h-[50px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Squre Top</p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <Image src="/edge1.png" alt='' width={"100"} height={"18"} className='w-[70px] h-[10px] md:w-[100px] md:h-[18px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Straight Edge</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/edge2.png" alt='' width={"100"} height={"18"} className='w-[70px] h-[10px] md:w-[100px] md:h-[18px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Round Edge</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/edge3.png" alt='' width={"100"} height={"18"} className='w-[70px] h-[10px] md:w-[100px] md:h-[18px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Swiss Edge 1</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/edge4.png" alt='' width={"100"} height={"18"} className='w-[70px] h-[10px] md:w-[100px] md:h-[18px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Swiss Edge 2</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/edge5.png" alt='' width={"100"} height={"18"} className='w-[70px] h-[10px] md:w-[100px] md:h-[18px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Swiss Edge 3</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/edge6.png" alt='' width={"100"} height={"18"} className='w-[70px] h-[10px] md:w-[100px] md:h-[18px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Live Edge</p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <Image src="/finish.png" alt='' width={"100"} height={"80"} className='w-[50px] h-[40px] md:w-[100px] md:h-[80px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Natural Finish</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/finish.png" alt='' width={"100"} height={"80"} className='w-[50px] h-[40px] md:w-[100px] md:h-[80px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Walnut Finish</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/finish.png" alt='' width={"100"} height={"80"} className='w-[50px] h-[40px] md:w-[100px] md:h-[80px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Black Finish</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/finish.png" alt='' width={"100"} height={"80"} className='w-[50px] h-[40px] md:w-[100px] md:h-[80px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Antique White</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/finish.png" alt='' width={"100"} height={"80"} className='w-[50px] h-[40px] md:w-[100px] md:h-[80px]' />
                        <p className='pt-1 text-[10px] md:text-sm xl:text-base'>Antique Rome</p>
                    </div>

                </div>
            </div>
        </div>
    );
};
