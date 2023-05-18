import React from 'react';
import { Coursecontent } from '@/components';
import { IQuarterData } from '@/types/quarter';
import Link from 'next/link';
import { tracks } from '@/data/tracks';


async function getData(quarter: string) {
    const res = await fetch(`https://panaverse-dao-ultra.vercel.app/api/compulsory/${quarter}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function generateStaticParams() {
    const ids: string[] = ['1', '2', '3'];

    return ids.map((id: string) => ({
        quarter: id,
    }));
}

const compulsoryNames = ['Programming Fundamentals', 'Web2 Using NextJS', 'Earn as You Learn']

async function Page({ params }: { params: { quarter: string } }) {

    const data: IQuarterData = await getData(params.quarter);
    if (!data) {
        return (
            <div className='flex flex-col'>
                <div className='flex justify-center items-center py-28'>
                    <h1 className='text-2xl '>Course Not Found !</h1>
                </div>
            </div>
        )
    }

    return (
        


        <>
            <div className={`w-full mb-20`}>
                <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto md:flex block justify-between mt-20 gap-10 relative'>
                    <div className='md:w-[270px] w-full h-fit md:border-none border border-zinc-300 md:rounded-none rounded-lg flex-shrink-0 md:sticky relative md:top-40 top-0'>
                        <div className='h-fit rounded-lg p-3 bg-gray-50 '>
                            <h2 className='font-normal text-[#f1f1f1] text-sm leading-tight bg-main p-3 rounded-lg'>Core Courses Sequence</h2>
                            <ul className='mt-2 text-zinc-800'>
                                {
                                    [1, 2, 3].map((val, index) => {
                                        return (
                                            <Link key={index} href={`/compulsory/${encodeURIComponent(val)}`}><li className={`py-[5px] pl-5 text-sm tracking-widest border-l-[2px] ${params.quarter === String(val) ? 'border-main text-sub' : 'border-[#c2c2c2]'}`}>{compulsoryNames[index]}</li></Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='mt-8 md:p-0 p-2'>
                            <h3 className='font-bold text-zinc-800 text-base leading-tight'>Advance Courses</h3>
                            <div className='flex flex-col gap-2 mt-3'>
                                {
                                    tracks.map((val, index) => {
                                        return (
                                            <Link key={index} href={`/tracks/${encodeURIComponent(val.id)}/4`} className='py-2 px-3 leading-none text-sm text-zinc-800 rounded-lg bg-gray-50 transition-all hover:bg-main hover:text-white'>{val.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[80%] w-full md:mt-0 mt-14'>
                        <Coursecontent data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;