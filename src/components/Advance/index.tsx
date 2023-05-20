import Link from 'next/link';
import React from 'react';
import AI from '../../../public/AI.jpg'
import Metaverse from '../../../public/metaverse.jpg'
import CloudComputing from '../../../public/cloudComputing.jpg'
import IOT from '../../../public/iot.jpg'
import Genomics from '../../../public/genomics.jpg'
import Automation from '../../../public/automation.jpg'
import Image from 'next/image';

function Advance() {
    return (
        <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10'>
            <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Advance Courses</h1>
            <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>


                <Link href={'/tracks/ai/4'} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image alt='Artificial Intelligence' src={AI} className='  object-cover w-full' height={'300'} />
                        </div>
                        <div className='px-4 flex justify-center items-center   h-[70px]'>
                            <text  >
                                Artificial Intelligence
                            </text>
                        </div>
                    </div>
                </Link>

                <Link href={'/tracks/wmd/4'} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image alt='Web 3 and Metaverse' src={Metaverse} className='  object-cover w-full' height={'300'} />
                        </div>
                        <div className='px-4 flex justify-center items-center   h-[70px]'>
                            <text  >
                                Web 3 and Metaverse

                            </text>
                        </div>
                    </div>
                </Link>

                <Link href={'/tracks/cnc/4'} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image alt='Cloud-Native Computing' src={CloudComputing} className='  object-cover w-full' height={'300'} />
                        </div>
                        <div className='px-4 flex justify-center items-center   h-[70px]'>
                            <text  >
                                Cloud-Native Computing

                            </text>
                        </div>
                    </div>
                </Link>

                <Link href={'/tracks/iot/4'} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image alt='Ambient Computing and IoT' src={IOT} className='  object-cover w-full' height={'300'} />
                        </div>
                        <div className='px-4 flex justify-center items-center   h-[70px]'>
                            <text  >
                                Ambient Computing and IoT
                            </text>
                        </div>
                    </div>
                </Link>

                <Link href={'/tracks/gbs/4'} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col  justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image alt='Genomics and Bioinformatics' src={Genomics} className='  object-cover w-full' height={'300'} />
                        </div>
                        <div className='px-4 flex justify-center items-center   h-[70px]'>
                            <text  >
                                Genomics and Bioinformatics
                            </text>
                        </div>
                    </div>
                </Link>

                <Link href={'/tracks/npa/4'} className='hover:scale-105 duration-200 transition-all'>
                    <div className=' overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                        <div>
                            <Image alt='Network Programmability and Automation' src={Automation} className='  object-cover w-full' height={'300'} />
                        </div>
                        <div className='px-4 flex justify-center items-center   h-[70px]'>
                            <text  >
                                Network Programmability and Automation
                            </text>
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    );
}

export default Advance;