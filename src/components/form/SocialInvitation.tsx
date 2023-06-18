"use client"

import { Poppins } from "next/font/google";
import { Icons } from "@/components";
import { useState, type Dispatch, type SetStateAction } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";


const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function SocialInvitation({
  setShowSocialInvitation,
}: {
  setShowSocialInvitation: Dispatch<SetStateAction<boolean>>;
}) {

  const [error, setError] = useState(false)

  function OpenSocial(link: string, platform: string) {
    window.open(link, platform, "width=800, height=600");
    localStorage.setItem(platform, 'y')
  }

  function checkSubscription() {
    let facebook = localStorage.getItem('facebook')
    let youtube = localStorage.getItem('youtube')
    let twitter = localStorage.getItem('twitter')
    let instagram = localStorage.getItem('instagram')
    let tiktok = localStorage.getItem('tiktok')

    if ((facebook && facebook === 'y') && (youtube && youtube ==='y') && (twitter && twitter === 'y') && (instagram && instagram === 'y') && (tiktok && tiktok === 'y')) {
      setShowSocialInvitation(false)
    }
    else {
      setError(true)
    }
  }

  return (
    <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
      <h2
        className="text-center text-xl text-main xs:text-3xl"
        style={poppins.style}
      >
        Please take a moment to subscribe to our social media for latest updates
      </h2>
      <div className="my-5 flex gap-3  md:text-sm">
        <div onClick={() => OpenSocial('https://www.facebook.com/governorsindhinitiative', 'facebook')} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white cursor-pointer">
          <FaFacebookF className="h-5 w-5" />
        </div>
        <div onClick={() => OpenSocial('https://www.youtube.com/channel/UCFo-Z1Tp-Tus4D-YQNlue6A?sub_confirmation=1', 'youtube')} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white cursor-pointer">
          <FaYoutube className="h-5 w-5" />
        </div>
        <div onClick={() => OpenSocial('https://twitter.com/KamranTessoriPk', 'twitter')} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white cursor-pointer">
          <FaTwitter className="h-5 w-5" />
        </div>
        <div onClick={() => OpenSocial('https://www.instagram.com/KamranTessoriPk/', 'instagram')} className="instagram flex h-8 w-8 items-center justify-center rounded-full text-white cursor-pointer">
          <FaInstagram className="h-5 w-5" />
        </div>
        <div onClick={() => OpenSocial('https://www.tiktok.com/@KamranTessoriPk', 'tiktok')} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171515] text-white cursor-pointer">
          <FaTiktok className="h-5 w-5" />
        </div>
      </div>
      <button
        onClick={checkSubscription}
        className="w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52"
        style={poppins.style}
      >
        CONTINUE
      </button>
      {
        error &&
        <p className="text-red-600 font-semibold text-center">Please follow all social links</p>
      }
    </div>
  );
}
