"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../public/logo.png";
import ChakraMenu from "../ChakraMenu";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-40 h-full w-full bg-main ${
          !open && "hidden"
        }`}
      >
        <div className="absolute right-5 top-5 ">
          <RxCross1
            className="text-white"
            size={25}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white">
          <Link href={"/"} onClick={() => setOpen(false)}>
            <div className="border-b border-[#1468a5] py-5">Home</div>
          </Link>
          <Link href={"/apply"} onClick={() => setOpen(false)}>
            <div className="border-b border-[#1468a5] py-5">Apply</div>
          </Link>
          <ChakraMenu screen="small" open={open} setOpen={setOpen} />
        </div>
      </div>
      <div className="sticky top-0 z-30 w-full bg-main backdrop-blur-3xl">
        <div className="m-auto flex h-20 w-[1300px] items-center justify-between xl:w-[90%] lg:w-[95%] md:h-16">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={90}
              className="mt-20 md:w-[80px] sm:mt-14 sm:w-[70px]"
            />
          </Link>
          <h1 className="text_shadow text-2xl font-extrabold text-[#b9d8f3] xl:text-[1.25rem] lg:text-[15px] md:hidden">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <h1 className="text_shadow hidden text-[1.125rem] font-extrabold text-[#b9d8f3] md:block">
            Tuition Free Program{" "}
          </h1>

    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-main z-40 ${!open && 'hidden'}`}>
                <div className='absolute top-5 right-5 '>
                    <RxCross1 className='text-white' size={25} onClick={() => setOpen(false)} />
                </div>
                <div className='w-[90%] m-auto mt-20 text-base text-white font-normal flex flex-col'>
                    <Link href={'/'} onClick={() => setOpen(false)}>
                        <div className='py-5 border-b border-[#1468a5]'>
                            Home
                        </div>
                    </Link>
                    <Link href={'/apply'} onClick={() => setOpen(false)}>
                        <div className='py-5 border-b border-[#1468a5]'>
                            Apply
                        </div>
                    </Link>
                    <ChakraMenu screen='small' open={open} setOpen={setOpen} />
                </div>
            </div>
            <div className='w-full bg-main sticky top-0 backdrop-blur-3xl z-30'>
                <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto flex justify-between items-center md:h-20 h-16'>
                    <Link href={'/'}><Image src={Logo} alt='logo' width={90} className='sm:mt-20 mt-14 md:w-[90px] sm:w-[80px] w-[70px]' /></Link>
                    <h1 className='xl:text-2xl lg:text-xl text-[15px] font-extrabold text-[#b9d8f3] md:block hidden text_shadow'>Tuition Free Education Program on Latest Technologies</h1>
                    <h1 className='text-[1.125rem] md:hidden font-extrabold text-[#b9d8f3] text_shadow'>Tuition Free Program </h1>

                    <div className='sm:flex hidden lg:gap-10 gap-5 text-[#FAF9F6]'>
                        <Link href={'/'}>
                            <div className='menu_btns'>
                                Home
                            </div>
                        </Link>

                        <Link href={'/apply'}>
                            <div className='menu_btns'>
                                Apply
                            </div>
                        </Link>
                        <ChakraMenu screen='large' open={open} setOpen={setOpen} />

                    </div>
                    <div className='sm:hidden block'>
                        <FiMenu size={24} className='text-white' onClick={() => setOpen(true)} />
                    </div>
                </div>
            </div>
        </>
    );

}

export default Header;
