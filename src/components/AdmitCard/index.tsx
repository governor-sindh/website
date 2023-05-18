import { IAdmitCard } from "@/types";
import { Poppins } from "next/font/google";
// import { useState } from "react";
import govtLogo from "../../../public/logo.png";
import Image from "next/image";
import { Card } from "@chakra-ui/react";
import { HiOutlineSave } from "react-icons/hi";
const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function AdmitCard({ data }: { data: IAdmitCard }) {
  return (
    <div className="w-[75%] border-2 border-gray-800  p-10">
      <div className="flex items-center">
        <Image
          src={govtLogo}
          alt="govt sindh logo"
          width={90}
          className="w-[70px] sm:w-[80px] md:w-[90px]"
        />
        <h1
          style={poppins.style}
          className="text-center text-lg font-bold text-main md:text-3xl"
        >
          Governor Sindh Initiative for Artificial Intelligence, Web 3.0 &
          Metaverse
        </h1>
      </div>
      <h2
        style={poppins.style}
        className="my-7 text-center text-lg font-bold text-black md:text-3xl"
      >
        Entry Test Admit Card
      </h2>
      <div className="flex items-center justify-evenly">
        <div className="image flex h-40 w-40 items-center justify-center border-2 border-dotted border-gray-900 text-center md:order-last">
          Paste
          <br />
          Photograph
          <br />1 X 1
        </div>
        <div className="fields">
          <div className="flex text-lg">
            <h6 className="w-24 font-bold md:w-52">Student Name :</h6>
            <p className="w-32 capitalize md:w-60">
              {data.fullName}
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>

          <div className="flex text-lg">
            <h6 className="w-24 font-bold md:w-52">Father&apos;s Name :</h6>
            <p className="w-32 capitalize md:w-60 ">
              {data.fatherName}
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>

          <div className="flex text-lg">
            <h6 className="w-24 font-bold md:w-52">Student CNIC Number :</h6>
            <p className="w-32 capitalize md:w-60 ">
              {data.cnic}
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>

          <div className="flex text-lg">
            <h6 className="w-24 font-bold md:w-52">Date of Registration :</h6>
            <p className="w-32 capitalize md:w-60 ">
              {`${data.dateOfRegistration}`}
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// entry test admit Card
// the test will be held at
// venue : gover house
// you will not to allowd
// please bring your cnic or b form, admit card copy
// detials of test will be email to you
// date will be announces
