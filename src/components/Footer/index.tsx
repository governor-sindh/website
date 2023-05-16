import React from 'react';
import Link from 'next/link';
import { tracks } from '@/data/tracks';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import { CompulsoryData } from '@/data/compulsory';



function Footer() {
    return (
        <div className='w-full bg-zinc-100 mt-20'>
            <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto py-20'>
                <div className='grid grid-cols-3 md:grid-cols-1 gap-10'>
                    <div className='text-zinc-800'>
                        <h1 className='font-bold text-xl'>Core Courses</h1>
                        <div className='mt-5 flex flex-col gap-3 md:text-sm'>
                            {
                                CompulsoryData.map((val, index) => {
                                    return (
                                        <Link href={`/compulsory/${encodeURIComponent(val.id)}`} className='truncate' key={index}>{val.text}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='text-zinc-800'>
                        <h1 className='font-bold text-xl'>Advance Courses</h1>
                        <div className='mt-5 flex flex-col gap-3  md:text-sm'>
                            {
                                tracks.map((val, index) => {
                                    return (
                                        <Link href={`/tracks/${encodeURIComponent(val.id)}/4`} className='' key={index}>{val.name}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='text-zinc-800'>
                        <h1 className='font-bold text-xl'>Social Links</h1>

                        <div className='mt-5 flex gap-3  md:text-sm'>
                            <Link href={'https://www.facebook.com/groups/panaverse'} target='_blank' className='w-10 h-10 bg-main rounded-full flex justify-center items-center text-white'>
                                <FaFacebookF size={16} />
                            </Link>
                            <Link href={'https://twitter.com/Panaverse_edu'} target='_blank' className='w-10 h-10 bg-main rounded-full flex justify-center items-center text-white'>
                                <FaTwitter size={16} />
                            </Link>
                            <Link href={'https://www.youtube.com/@panaverse/streams'} target='_blank' className='w-10 h-10 bg-main rounded-full flex justify-center items-center text-white'>
                                <FaYoutube size={16} />
                            </Link>
                            <Link href={'https://github.com/panaverse'} target='_blank' className='w-10 h-10 bg-main rounded-full flex justify-center items-center text-white'>
                                <FaGithub size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Footer;