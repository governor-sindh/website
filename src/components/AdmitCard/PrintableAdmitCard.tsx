// "use client";
import { IAdmitCard } from "@/types";
import { Poppins } from "next/font/google";
import govtLogo from "../../../public/logo.png";
import Image from "next/image";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function PrintableAdmitCard({ data }: { data: IAdmitCard }) {
  return (
    <div className="hidden w-[800px] border-2 border-gray-800 bg-red-400 p-10 print:block">
      <div className="flex items-center">
        <Image
          src={govtLogo}
          alt="govt sindh logo"
          width={90}
          className="w-[70px] sm:w-[80px] md:w-[90px]"
        />
        <h1
          style={poppins.style}
          className="text-center text-3xl font-bold text-main"
        >
          Governor Sindh Initiative for Artificial Intelligence, Web 3.0 &
          Metaverse
        </h1>
      </div>
      <h2
        style={poppins.style}
        className="my-7 text-center text-3xl font-bold text-black"
      >
        Entry Test Admit Card
      </h2>
      <div className="flex items-center justify-evenly">
        <div className="fields">
          <div className="flex text-lg">
            <h6 className="w-52 font-bold">Student Name :</h6>
            <p className="w-60 capitalize">
              {data.fullName}
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>

          <div className="flex text-lg">
            <h6 className="w-52 font-bold">Father&apos;s Name :</h6>
            <p className="w-60 capitalize ">
              {data.fatherName}
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>

          <div className="flex text-lg">
            <h6 className="w-52 font-bold">Student CNIC Number :</h6>
            <p className="w-60 capitalize ">
              {data.cnic}
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>

          <div className="flex text-lg">
            <h6 className="w-52 font-bold">Date of Registration :</h6>
            <p className="w-60 capitalize ">
              {`${data.dateOfRegistration}`}
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>

          <div className="flex text-lg">
            <h6 className="w-52 font-bold">Venue :</h6>
            <p className="w-60 capitalize ">
              Governor House Sindh
              <div className="h-[2px] w-full bg-gray-700"></div>
            </p>
          </div>
        </div>
        <div className="image order-last flex h-40 w-40 items-center justify-center border-2 border-dotted border-gray-900 text-center">
          Paste
          <br />
          Photograph
          <br />1 X 1
        </div>
      </div>

      <div className="my-6 h-[1px] w-full bg-zinc-500"></div>

      <h2 className="my-2 text-lg font-bold">Instruction :</h2>
      <ul className="my-2 pl-6">
        <li>Please bring your cnic or b-form and admit card hard copy</li>
        <li>Details and Date of Entry test will be emailed to you</li>
      </ul>
    </div>
  );
}
