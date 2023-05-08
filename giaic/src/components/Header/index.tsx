import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/logo.png'

function Header() {
    return (
        <div className='w-full bg-[#045084] sticky top-0 backdrop-blur-3xl z-50'>
            <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto flex justify-between items-center h-20 md:h-16'>
                <Link href={'/'}><Image src={Logo} alt='logo' width={90} className='mt-20 md:w-[80px]' /></Link>
                <div className='flex gap-10 text-[#FAF9F6]'>
                    <Link href={'/'}>
                        <div className='menu_btns'>
                            Home
                        </div>
                    </Link>
                    {/* <Link href={'/'}>
                        <div className='menu_btns'>
                            Courses
                        </div>
                    </Link> */}
                    <Link href={'/apply'}>
                        <div className='menu_btns'>
                            Apply
                        </div>
                    </Link>
                    {/* <Link href={'/signup'}>
                        <div className='menu_btns'>
                            SignUp
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Header;