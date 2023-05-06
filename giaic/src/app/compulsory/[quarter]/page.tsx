import React from 'react';
import { Coursecontent } from '@/components';
import { IQuarterData } from '@/types/quarter';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import { tracks } from '@/data/tracks';

const roboto = Roboto({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin']
})


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

async function Page({ params }: { params: { quarter: string } }) {

    const data: IQuarterData = await getData(params.quarter);
    if (!data) {
        return (
            <div className='flex flex-col'>
                <div className='flex justify-center items-center py-28'>
                    <h1 className='text-2xl '>Track Not Found !</h1>
                </div>
            </div>
        )
    }

    return (

        <>
            <div className={`w-full mb-20 ${roboto.className}`}>
                <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto flex md:block justify-between mt-20 gap-10 relative'>
                    <div className='w-[270px] md:w-full h-fit md:border border-zinc-800 md:rounded-lg flex-shrink-0 sticky md:relative md:top-0 top-40'>
                        <div className='h-fit rounded-lg p-3 bg-zinc-300'>
                            <h2 className='font-normal text-[#f1f1f1] text-sm leading-tight bg-[#045084] p-3 rounded-lg'>Compulsory Quarters</h2>
                            <ul className='mt-2 text-zinc-800'>
                                {
                                    ['1', '2', '3'].map((val, index) => {
                                        return (
                                            <Link key={index} href={`/compulsory/${encodeURIComponent(val)}`}><li className={`py-[5px] pl-5 text-sm tracking-widest border-l-[2px] ${params.quarter === val ? 'border-[#045084] text-[#045084]' : 'border-[#c2c2c2]'}`}>Quarter - {val}</li></Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='mt-8 md:p-2'>
                            <h3 className='font-bold text-zinc-800 text-base leading-tight'>Available Tracks</h3>
                            <div className='flex flex-col gap-2 mt-3'>
                                {
                                    tracks.map((val, index) => {
                                        return (
                                            <Link key={index} href={`/tracks/${encodeURIComponent(val.id)}/4`} className='py-2 px-3 leading-none text-sm text-zinc-800 rounded-lg bg-zinc-300 transition-all hover:bg-[#045084] hover:text-white'>{val.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='w-[80%] md:w-full md:mt-14'>
                        <Coursecontent data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;