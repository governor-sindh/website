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

          <div className="flex gap-10 text-[#FAF9F6] lg:gap-5 sm:hidden">
            <Link href={"/"}>
              <div className="menu_btns">Home</div>
            </Link>

            <Link href={"/apply"}>
              <div className="menu_btns">Apply</div>
            </Link>
            <ChakraMenu screen="large" open={open} setOpen={setOpen} />
          </div>
          <div className="hidden sm:block">
            <FiMenu
              size={24}
              className="text-white"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
