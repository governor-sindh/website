import Link from 'next/link';
import React from 'react';

function Compulsory() {
    return (
        <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto mt-10 mb-10'>
            <h2 className='text-5xl font-extrabold text-zinc-800 text-center'>All Courses</h2>
            <h1 className='text-4xl lg:text-4xl sm:text-3xl text-main font-extrabold mt-10'>Compulsory Courses</h1>

            <div className='grid grid-cols-4 xl-lg:grid-cols-3 sm:grid-cols-1 gap-10 xl-lg:gap-5 mt-10'>
                <Link href={'/compulsory/1'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-2xl font-bold'>
                        Course 1
                    </div>
                </Link>
                <Link href={'/compulsory/2'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-2xl font-bold'>
                        Course 2
                    </div>
                </Link>
                <Link href={'/compulsory/3'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-zinc-600 text-2xl font-bold'>
                        Course 3
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Compulsory;