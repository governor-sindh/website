import Image from 'next/image';
import React from 'react';
// import Lines from '../../public/assets/lines.svg'
import { Poppins } from 'next/font/google';
import Cover from '../../../public/cover.jpg'
import Link from 'next/link';
// import { Header } from '@/components';

const poppins = Poppins({
    weight: ['300', '400', '500', '800', '900'],
    subsets: ['latin']
})

function Hero() {
    return (
        <div className={`w-full relative py-10 md:py-5 overflow-hidden bg-zinc-100 ${poppins.className}`}>
            {/* <div className='absolute bottom-0 w-full h-full bg_radial_gradient -z-10'></div> */}
            {/* <Image src={Lines} alt='lines' className='absolute -top-10 xl:top-0 opacity-80 w-full xl:h-full md:hidden -z-20' /> */}
            <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto mt-10 flex md:block justify-between items-center relative'>
                <div className='w-1/2 md:w-full '>
                    <h1 className='text-6xl lg:text-5xl sm:text-[2rem] sm:leading-10 sm:text-center tracking-wider text-main font-extrabold'>Governor Sindh</h1>
                    <h1 className='text-[2.5rem] lg:text-4xl sm:text-[1.5rem] sm:text-center leading-[3rem] sm:leading-[2rem]  text-sub font-semibold mt-5 tracking-wider'>Initiative for<br />Artificial Intelligence,<br />Web 3.0 & Metaverse</h1>
                    <p className='text-2xl sm:text-[1.25rem] sm:text-center font-extrabold text-main my-5'>
                        Earn up to $5,000 / month
                    </p>
                    <p className='my-5 text-xl sm:text-[1.125rem] sm:text-center text-main tracking-wider w-[80%] sm:w-full'>
                        Opening the Governor House and Removing Barriers to Educate the Youth of Sindh.
                    </p>
                    <Link href={'/apply'}><button className='mt-5 py-4 w-52 sm:py-3 sm:w-full sm:text-sm text-center tracking-widest bg-sub text-white text-base font-semibold transition-all hover:translate-y-1'>APPLY NOW</button></Link>
                </div>
                <div className='w-1/2 md:w-full flex justify-end md:justify-center md:mt-7'>
                    <Image src={Cover} alt='piaic' className='w-[80%] lg:w-[95%] md:w-[500px] sm:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero;