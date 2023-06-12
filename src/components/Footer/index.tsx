import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";
import { CompulsoryData, tracks } from "@/data";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="mt-20 w-full bg-zinc-100 print:hidden">
      <div className="m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Core Courses</h1>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              {CompulsoryData.map((val, index) => {
                return (
                  <Link
                    href={`/compulsory/${encodeURIComponent(val.id)}`}
                    className="truncate"
                    key={index}
                  >
                    {val.text}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Advanced Courses</h1>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              {tracks.map((val, index) => {
                return (
                  <Link
                    href={`/tracks/${encodeURIComponent(val.id)}/4`}
                    className=""
                    key={index}
                  >
                    {val.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Social Links</h1>

            <div className="mt-5 flex gap-3 md:text-sm">
              <Link
                href={"https://www.facebook.com/governorsindhinitiative"}
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white"
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link
                href={"https://www.youtube.com/@KamranTessorikk"}
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white"
              >
                <FaYoutube className="h-5 w-5" />
              </Link>
              <Link
                href={"https://github.com/panaverse"}
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171515] text-white"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            </div>

            <Link
              className="mt-4 flex items-center text-main underline py-1"
              href="mailto:education@governorsindh.com"
              target="_blank"
            >
              <div className="h-6 w-6 mr-3">
              <AiOutlineMail className="h-6 w-6 text-main" />
              </div>
              education@governorsindh.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
