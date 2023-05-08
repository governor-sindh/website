import Image from 'next/image';
import React from 'react';
// import Lines from '../../public/assets/lines.svg'
import { Poppins } from 'next/font/google';
import Cover from '../../../public/cover.jpg'
import { Header } from '@/components';
import MainHeading from '../heading/mainHeading';

const poppins = Poppins({
    weight: ['300', '400', '500','800','900'],
    subsets: ['latin']
})

function Hero() {
    return (
        <div className={`w-full relative py-10 md:py-5 overflow-hidden bg-zinc-100 ${poppins.className}`}>
            {/* <div className='absolute bottom-0 w-full h-full bg_radial_gradient -z-10'></div> */}
            {/* <Image src={Lines} alt='lines' className='absolute -top-10 xl:top-0 opacity-80 w-full xl:h-full md:hidden -z-20' /> */}
            <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto mt-10 md:mt-20 flex md:block justify-between items-center relative'>
                <div className='w-1/2 md:w-full '>
                    <h1 className='text-6xl lg:text-5xl sm:text-4xl text-zinc-800 font-extrabold'>Free</h1>
                    <h1 className='text-5xl lg:text-4xl sm:text-3xl text-[#045084] font-extrabold'>Artificial Intelligence, Metaverse & <br /> Web 3 <br />Program</h1>
                    {/* <h1 className='text-4xl lg:text-3xl sm:text-2xl font-bold text-zinc-800 mt-3'>for Artificial Intelligence & Computing</h1> */}
                    <p className='text-zinc-700 text-sm font-semibold mt-5 sm:mt-3'>
                        The mission of GIAIC is to reshape Pakistan by revolutionizing education,
                        research, and business by adopting latest, cutting-edge technologies
                        . Experts are calling this the 4th industrial revolution. We want Pakistan
                        to become a global hub for AI, data science, cloud native computing, edge computing,
                        blockchain, augmented reality, and internet of things.
                    </p>
                    <div className='px-4 py-4 text-sm font-bold bg-[#2CB9E7] text-white mt-5 w-fit'>
                        $5000 Earning Program
                    </div>

                    <a href='https://portal.piaic.org' target={'_blank'} rel="noreferrer"><button className='mt-5 py-4 w-40 sm:py-3 sm:w-36 sm:text-sm text-center bg-gradient-to-r from-[#045084] to-[#449ad3] rounded-full  text-white text_shadow text-base font-bold transition-all hover:translate-y-1'>APPLY</button></a>
                </div>
                <div className='w-1/2 md:w-full flex justify-end md:justify-center md:mt-7'>
                    <Image src={Cover} alt='piaic' className='w-[80%] lg:w-[95%] md:w-[500px] sm:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero;