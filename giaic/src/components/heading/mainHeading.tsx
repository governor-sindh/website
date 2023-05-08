import React from 'react';

function MainHeading({ name }: { name: string }) {
    return (
        <div className='text-6xl lg:text-5xl sm:text-4xl text-[#045084] font-bold text_shadow relative'>
            <h1 className='relative z-20'>{name}</h1>
            {/* <div className='absolute -top-5 sm:-top-6 -left-5 lg:-left-2 w-20 h-20 lg:w-16 lg:h-16 grid grid-cols-6'>
                {
                    Array(36).fill(null).map((val, index) => <div key={index} className='w-1 h-1 rounded-full bg-zinc-700'></div>)
                }

            </div> */}
        </div>
    );
}

export default MainHeading;