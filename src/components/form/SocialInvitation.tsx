"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState, type Dispatch, type SetStateAction, useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { socialLinks } from "@/data/socialLinks";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function SocialInvitation({
  setShowSocialInvitation,
}: {
  setShowSocialInvitation: Dispatch<SetStateAction<boolean>>;
}) {
  const [error, setError] = useState(false);
  const [socialSuccess, setSocialSuccess] = useState({
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: "",
    // tiktok: ""
  });

  useEffect(() => {
    let facebook = localStorage.getItem("facebook");
    let youtube = localStorage.getItem("youtube");
    let twitter = localStorage.getItem("twitter");
    let instagram = localStorage.getItem("instagram");
    // let tiktok = localStorage.getItem('tiktok')
    if (facebook && facebook === "y") {
      setSocialSuccess((oldSocials) => ({ ...oldSocials, facebook: "y" }));
    }
    if (youtube && youtube === "y") {
      setSocialSuccess((oldSocials) => ({ ...oldSocials, youtube: "y" }));
    }
    if (twitter && twitter === "y") {
      setSocialSuccess((oldSocials) => ({ ...oldSocials, twitter: "y" }));
    }
    if (instagram && instagram === "y") {
      setSocialSuccess((oldSocials) => ({ ...oldSocials, instagram: "y" }));
    }
    // if (tiktok && tiktok === 'y') {
    //   setSocialSuccess((oldSocials) => ({ ...oldSocials, tiktok: 'y' }))
    // }
  }, []);

  const OpenSocial = (link: string, platform: string) => {
    window.open(link, "_blank");

    setTimeout(() => {
      localStorage.setItem(platform, "y");
      setSocialSuccess((oldSocials) => ({ ...oldSocials, [platform]: "y" }));
    }, 2000);
  };

  function checkSubscription() {
    if (
      socialSuccess.facebook &&
      socialSuccess.youtube &&
      socialSuccess.twitter &&
      socialSuccess.instagram
    ) {
      setShowSocialInvitation(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
      <h2
        className="text-center text-xl text-main xs:text-3xl"
        style={poppins.style}
      >
        Before continuing to the application please subscribe on these social
        media platforms.{" "}
      </h2>

      <div className="my-5 flex gap-3  md:text-sm">
        {socialLinks.map((item) =>
          // @ts-ignore
          socialSuccess?.[item.platform] ? (
            <div
              key={item.id}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white"
            >
              <GiCheckMark size={14} />
            </div>
          ) : (
            <div
              key={item.id}
              onClick={() => OpenSocial(item.link, item.platform)}
              className={`flex h-8 w-8 cursor-pointer items-center justify-center ${item.class} rounded-full text-white`}
            >
              {item.icon}
            </div>
          )
        )}
      </div>

      {socialSuccess.facebook &&
      socialSuccess.youtube &&
      socialSuccess.instagram &&
      socialSuccess.twitter ? (
        <button
          onClick={checkSubscription}
          className="w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52"
          style={poppins.style}
        >
          CONTINUE
        </button>
      ) : (
        <div className="group relative mt-4">
          <div className="popover absolute bottom-16 right-2 z-10 rounded-lg border border-gray-400 bg-white px-4 py-2 text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
            <p>Click the links above first.</p>
          </div>
          <button
            disabled
            className="w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52"
            style={poppins.style}
          >
            CONTINUE
          </button>
        </div>
      )}
      <p className="text-center">
        Already applied?{" "}
        <Link className="text-blue-400 underline" href={"/admit-card"}>
          Get Admit Card
        </Link>
      </p>

      {error && (
        <p className="text-center font-semibold text-red-600">
          Please follow all social links
        </p>
      )}
    </div>
  );
}
