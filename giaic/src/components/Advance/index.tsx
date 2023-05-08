import Link from 'next/link';
import React from 'react';

function Advance() {
    return (
        <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto mt-20 mb-10'>
            <h1 className='text-4xl lg:text-4xl sm:text-3xl text-[#045084] font-extrabold mt-10'>Advance Courses</h1>
            <div className='grid grid-cols-4 xl-lg:grid-cols-3 sm:grid-cols-1 gap-10 xl-lg:gap-5 mt-7'>
                <Link href={'/tracks/ai/4'}>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Artificial Intelligence
                    </div>
                </Link>
                <Link href={'/tracks/wmd/4'}>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Web 3 and Metaverse
                    </div>
                </Link>
                <Link href={'/tracks/cnc/4'}>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Cloud-Native Computing
                    </div>
                </Link>
                <Link href={'/tracks/iot/4'}>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Ambient Computing and IoT
                    </div>
                </Link>
                <Link href={'/tracks/gbs/4'}>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Genomics and Bioinformatics
                    </div>
                </Link>
                <Link href={'/tracks/npa/4'}>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-lg text-center font-bold'>
                        Network Programmability and Automation
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Advance;