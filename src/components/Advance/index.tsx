import Link from 'next/link';
import React from 'react';

function Advance() {
    return (
        <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10'>
            <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Advance Courses</h1>
            <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
                <Link href={'/tracks/ai/4'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Artificial Intelligence
                    </div>
                </Link>
                <Link href={'/tracks/wmd/4'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Web 3 and Metaverse
                    </div>
                </Link>
                <Link href={'/tracks/cnc/4'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Cloud-Native Computing
                    </div>
                </Link>
                <Link href={'/tracks/iot/4'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Ambient Computing and IoT
                    </div>
                </Link>
                <Link href={'/tracks/gbs/4'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Genomics and Bioinformatics
                    </div>
                </Link>
                <Link href={'/tracks/npa/4'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Network Programmability and Automation
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Advance;