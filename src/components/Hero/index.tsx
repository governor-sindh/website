'use client'
import Image from 'next/image';
import React from 'react';
import { Poppins } from 'next/font/google';
import Cover from '../../../public/cover.jpg'
import Link from 'next/link';
import { useState, useEffect } from 'react';
const poppins = Poppins({
    weight: ['300', '400', '500', '800', '900'],
    subsets: ['latin']
})

function Hero() {
    const [Counter, setCounter] = useState(0);
    const [loader, setLoder] = useState(true);
    useEffect(() => {
      fetchCounterValue();
    }, []);
  
    const fetchCounterValue = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/counter');
        const data = await response.json();
        await setCounter(data);
        setLoder(false)
      } catch (error) {
        console.error('Error:', error);
        setLoder(false)
      }
    };
  
    return (
        <div className={`w-full relative md:py-10 py-5 overflow-hidden bg-zinc-100 ${poppins.className}`}>
            <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 md:flex block justify-between items-center relative'>
                <div className='md:w-1/2 w-full'>
                    <h1 className='lg:text-6xl sm:text-5xl text-[2rem] sm:leading-none leading-10 sm:text-left text-center tracking-wider text-main font-extrabold'>Governor Sindh</h1>
                    <h1 className='lg:text-[2.5rem] sm:text-4xl text-[1.5rem] sm:text-left text-center sm:leading-[3rem] leading-[2rem]  text-sub font-semibold mt-5 tracking-wider'>Initiative for<br />Artificial Intelligence,<br />Web 3.0 & Metaverse</h1>
                    <p className='sm:text-2xl text-[1.25rem] sm:text-left text-center font-extrabold text-main my-5'>
                        Earn up to $5,000 / month
                    </p>
                    <p className='my-5 sm:text-xl text-[1.125rem] sm:text-left text-center text-main tracking-wider sm:w-[80%] w-full'>
                        Opening the Governor House and Removing Barriers to Educate the Youth of Sindh.
                    </p>
                    <Link href={'/apply'}><button className='mt-5 sm:py-4 py-3 sm:w-52 w-full sm:text-base text-sm text-center tracking-widest bg-sub text-white font-semibold transition-all hover:translate-y-1'>APPLY NOW</button></Link>
                    <h1 className="sm:pt-4 pt-3 sm:w-52 w-full text-main sm:text-2xl text-[1.25rem] text-center tracking-wides font-semibold"> {loader ? "loading..." :  Counter ?? Counter }</h1>
                    <h1 className='sm:py-1 py-1 sm:w-52 w-[40%] text-main sm:text-xl text-[1.125rem] text-center tracking-wides'> Applications recived</h1>
                </div>
                <div className='md:w-1/2 w-full flex md:justify-end justify-center md:m-auto mt-7'>
                    <Image src={Cover} alt='piaic' className='lg:w-[80%] md:w-[95%] sm:w-[500px] w-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero;