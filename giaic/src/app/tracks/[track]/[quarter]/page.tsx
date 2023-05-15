import React from 'react';
import { Coursecontent } from '@/components';
import { ITrackDataType } from '@/types/quarter';
import Link from 'next/link';
import { tracks } from '../../../../data/tracks';




async function getData(track: string, quarter: string) {
    const res = await fetch(`https://panaverse-dao-ultra.vercel.app/api/tracks/${track}?quarter=${quarter}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function generateStaticParams() {
    const ids = tracks.map((val) => ([{ track: val.id, quarter: '4' }, { track: val.id, quarter: '5' }])).flat()

    return ids.map((val) => {
        return {
            track: val.track,
            quarter: val.quarter
        }
    });
}

async function Page({ params }: { params: { track: string, quarter: string } }) {
    const data: ITrackDataType = await getData(params.track, params.quarter);

    // console.log(params.quarter)
    if ((params.quarter !== '4' && params.quarter !== '5') || (params.track !== 'wmd' && params.track !== 'ai' && params.track !== 'cnc' && params.track !== 'iot' && params.track !== 'gbs' && params.track !== 'npa')) {
        return (
            <div className='w-full h-[50vh] flex justify-center items-center text-2xl font-semibold text-zinc-800'>
                404 Not Found
            </div>
        )
    }


    return (
        <>

            <div className={`w-full mb-20`}>
                <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto flex md:block justify-between mt-20 gap-10 relative'>
                    <div className='w-[270px] md:w-full h-fit md:border border-zinc-300 md:rounded-lg flex-shrink-0 sticky md:relative md:top-0 top-40'>
                        <div className='h-fit rounded-lg p-3 bg-gray-50'>
                            <h2 className='font-normal text-white text-sm leading-tight bg-main p-3 rounded-lg'>{data.trackName}</h2>
                            <ul className='mt-2 text-zinc-800'>
                                {
                                    ['4', '5'].map((val, index) => {
                                        return (
                                            <Link key={index} href={`tracks/${encodeURIComponent(params.track)}/${encodeURIComponent(val)}`}><li className={`py-[5px] pl-5 text-sm tracking-widest border-l-[2px] ${params.quarter === val ? 'border-main text-sub' : 'border-[#c2c2c2]'}`}>Course - {val}</li></Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='mt-8 md:px-1'>
                            <ul>
                                {
                                    tracks.map((val, index) => {
                                        return (
                                            <Link key={index} href={`tracks/${encodeURIComponent(val.id)}/4`}>
                                                <li className='font-light text-sm flex gap-3'>
                                                    <div className='w-4 flex flex-col justify-center items-center'>
                                                        <div className='w-2 h-2 rounded-full bg-main'></div>
                                                        <div className='flex-grow w-[1px] bg-main'></div>
                                                    </div>
                                                    <p className={`w-4/5 pb-4 font-bold leading-none ${val.id === params.track ? 'text-sub' : 'text-zinc-800'}`}>{val.name}</p>
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='mt-8 md:p-2'>
                            <h3 className='font-bold text-zinc-800  text-base leading-tight'>Compulsory Courses</h3>
                            <div className='flex gap-2 mt-2 items-center justify-between'>
                                {
                                    ['1', '2', '3'].map((val, index) => {
                                        return (
                                            <Link href={`compulsory/${encodeURIComponent(val)}`} key={index} className='p-3 w-1/3 text-center text-sm rounded-lg font-bold bg-gray-50 text-zinc-800 transition-all hover:bg-main hover:text-[#f1f1f1] hover:font-bold'>Q{val}</Link>
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
    );
}

export default Page;