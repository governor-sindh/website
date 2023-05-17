import Link from 'next/link';
import React from 'react';

function Compulsory() {
    return (
        <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
            <h2 className='sm:text-5xl text-4xl font-extrabold text-zinc-800 text-center'>All Courses</h2>
            <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Core Courses Sequence</h1>

            <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
                <Link href={'/compulsory/1'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                        Programming Fundamentals
                    </div>
                </Link>
                <Link href={'/compulsory/2'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                        Web2 Using NextJS
                    </div>
                </Link>
                <Link href={'/compulsory/3'} className='hover:scale-110 duration-300 transition-all'>
                    <div className='h-[150px] box_shadow rounded-lg border-t-[40px] border-zinc-800 flex justify-center items-center text-center text-zinc-600 text-lg font-bold'>
                        Earn as You Learn
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Compulsory;