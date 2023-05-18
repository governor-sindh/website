import Image from 'next/image';
import React from 'react';
import { Poppins } from 'next/font/google';
import Cover from '../../../public/cover.png'
import Link from 'next/link';
import bgHero from '../../../public/bg_hero.svg'

const poppins = Poppins({
    weight: ['300', '400', '500', '800', '900'],
    subsets: ['latin']
})

function Hero() {
    return (
        <div className={` z-0 w-full relative overflow-hidden bg-zinc-100 ${poppins.className}`}>
            <img src={bgHero.src} alt='bg hero'  className=' md:opacity-40 xl:opacity-100 hidden md:block h-100% z-10 transform  -scale-x-100 absolute top-[0px] right-[-120px]' />

            <div className=' z-50 xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10   block md:flex md:flex-row justify-between items-center '>
                <div className=' h-fit md:w-1/2 w-full md:py-10 pt-5'>
                    <h1 className='lg:text-6xl sm:text-5xl text-[2rem] sm:leading-none leading-10 md:text-left text-center tracking-wider text-main font-extrabold whitespace-nowrap'>Governor Sindh</h1>
                    <h1 className='lg:text-[2.5rem] sm:text-4xl text-[1.5rem] md:text-left text-center sm:leading-[3rem] leading-[2rem]  text-sub font-semibold mt-5 tracking-wider whitespace-nowrap'>Initiative for<br />Artificial Intelligence,<br />Web 3.0 & Metaverse</h1>
                    <p className=' whitespace-nowrap sm:text-2xl text-[1.25rem] md:text-left text-center font-extrabold text-main my-5'>
                        Earn up to $5,000 / month
                    </p>
                    <p className='  my-5 sm:text-xl text-[1.125rem] md:text-left text-center text-main tracking-wider md:w-[80%] w-full'>
                        Opening the Governor House and Removing Barriers to Educate the Youth of Sindh.
                    </p>
                    <Link href={'/apply'}><button className='mt-5 sm:py-4 py-3 rounded-md md:w-52 w-full sm:text-base text-sm text-center tracking-widest bg-sub text-white font-semibold transition-all hover:translate-y-1'>APPLY NOW</button></Link>
                </div>
                <div className=' relative  w-full flex  items-end md:justify-end justify-center md:m-auto mt-7 '>
                    <Image src={Cover} alt='piaic' className=' transform  -scale-x-100 z-50 w-full  md: min-w-[500px]  lg:w-[600px]' />

                </div>
               
            </div>
        </div>
    )
}

export default Hero;