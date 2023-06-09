"use client";
import { AdmitCard, PrintableAdmitCard } from "@/components";
import { IAdmitCard } from "@/types";
import { Poppins } from "next/font/google";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  // FaTwitter,
  FaYoutube,
  // FaLinkedinIn,
  // FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function DownloadAdmitCard({ data }: { data: IAdmitCard }) {
  return (
    <div className="mx-auto my-6 flex max-w-4xl flex-col items-center justify-center gap-6">
      <div style={poppins.style} className="w-[95%] text-justify print:hidden">
        <h3 className="capitalize">Dear {data.fullName},</h3>
        <p className="my-4">
          Thank you for expressing your interest in the Governor&apos;s
          Initiative for Artificial Intelligence, Web 3.0 & Metaverse Program!
        </p>
        <p>
          We have received your application. Please note your Registration
          Number: {`${data.studentId}`.padStart(8, "0")}
        </p>
        <p className="my-4">
          Now that you&apos;ve applied, the next step will be the entrance exam.
          The details of the entrance exam, including the venue and date will be
          emailed to you. If you haven&apos;t already downloaded your admit card
          please download it and save it. You&apos;ll need it when you come for
          the entrance exam. You can find it at:{" "}
          <Link className="text-main underline" href="/admit-card">
            www.governorsindh.com/admit-card
          </Link>
        </p>
        <p>
          While applications are being accepted, we encourage you to begin
          preparing for the entrance exam. The entrance exam will be split into
          3 parts:
        </p>
        <ul className="my-4 list-[upper-roman]">
          <li className="ml-14 pl-6">English (Reading & Vocabulary)</li>
          <li className="ml-14 pl-6">Mathematics (10th Grade Math)</li>
          <li className="ml-14 pl-6">Intelligence Quotient (IQ)</li>
        </ul>
        <p>
          For those students who are new to the computer field, you can get a
          jump start on your learning immediately by starting HTML and CSS :{" "}
        </p>
        <ul>
          <li className="my-4">
            <span className="block">
              Learn HTML by Hira Khan (Watch Recorded Videos)
            </span>
            <Link
              className="text-main underline"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
              target="_blank"
            >
              youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6
            </Link>
          </li>
          <li>
            <span className="block">
              Learn CSS Intro by Hira Khan (Watch Recorded Videos)
            </span>
            <Link
              className="text-main underline"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
              target="_blank"
            >
              youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob
            </Link>
          </li>
        </ul>
        <p className="mt-4 ">
          Regards,
          <b className="block font-bold">
            {" "}
            Governor&apos;s Initiative for AI, Web 3.0 & Metaverse{" "}
          </b>
          <Link
            className="text-main underline flex items-center mt-4"
            href="mailto:education@governorsindh.com"
            target="_blank"
          >
            <MdEmail className="mr-3 p-2 w-10 h-10 rounded-full bg-main text-white"/>
            education@governorsindh.com
          </Link>
        </p>
        <p className="my-4">
          To stay up to date on the latest updates from the Governor&apos;s
          Initiative, please follow us on your favorite social media channels :
        </p>
        <div className="my-4 flex gap-3  md:text-sm">
          <Link
            href={"https://www.facebook.com/governorsindhinitiative"}
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white"
          >
            <FaFacebookF size={16} />
          </Link>
          <Link
            href={"https://www.youtube.com/@KamranTessorikk"}
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white"
          >
            <FaYoutube size={16} />
          </Link>
          <Link
            href={"https://github.com/panaverse"}
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white"
            >
            <FaGithub size={18} />
          </Link>
            {/* <Link
              href={"https://twitter.com/Panaverse_edu"}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white"
            >
              <FaTwitter size={16} />
            </Link> */}
          {/* <Link
            href={"https://www.linkedin.com/company/panaverse/"}
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white"
          >
            <FaLinkedinIn size={18} />
          </Link> */}
          {/* <Link
            href={"whatsapp"}
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white"
          >
            <FaWhatsapp size={20} />
          </Link> */}
        </div>
      </div>

      <AdmitCard data={data} />
      <PrintableAdmitCard data={data} />
      <button
        className="mt-5 w-[95%] bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 print:hidden sm:w-52 sm:py-4 sm:text-base"
        onClick={() => window.print()}
      >
        DOWNLOAD
      </button>
    </div>
  );
}
