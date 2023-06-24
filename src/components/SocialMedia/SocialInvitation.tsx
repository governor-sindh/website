"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState, type Dispatch, type SetStateAction, useEffect } from "react";
import { socialLinks } from "@/data";
import { SocialIconStepper } from "@/components";
import { useSteps } from "@chakra-ui/react";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function SocialInvitation({
  setShowSocialInvitation,
}: {
  setShowSocialInvitation: Dispatch<SetStateAction<boolean | null>>;
}) {
  const [socialSuccess, setSocialSuccess] = useState({
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: "",
  });

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: socialLinks.length,
  });

  useEffect(() => {
    let facebook = localStorage.getItem("facebook");
    let youtube = localStorage.getItem("youtube");
    let twitter = localStorage.getItem("twitter");
    let instagram = localStorage.getItem("instagram");

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
  }, []);

  const OpenSocial = (link: string, platform: string) => {
    if (!link) return;
    window.open(link, "_blank");

    setTimeout(() => {
      setActiveStep((prev) => {
        if (3 < prev) return prev;
        return (prev += 1);
      });
      localStorage.setItem(platform, "y");
      setSocialSuccess((oldSocials) => ({ ...oldSocials, [platform]: "y" }));
    }, 2000);
  };

  return (
    <>
      <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
        <h2
          className="text-center text-xl text-main xs:text-3xl"
          style={poppins.style}
        >
          Before continuing to the application please subscribe on these social
          media platforms.{" "}
        </h2>
        <div className="mt-5 flex gap-3  md:text-sm">
          {
            <div
              key={socialLinks[activeStep].id}
              onClick={() =>
                OpenSocial(
                  socialLinks[activeStep].link,
                  socialLinks[activeStep].platform
                )
              }
              className={`flex h-8 w-8 cursor-pointer items-center justify-center ${socialLinks[activeStep].class} rounded-full text-white`}
            >
              {socialLinks[activeStep].icon}
            </div>
          }
        </div>

        {socialSuccess.facebook &&
        socialSuccess.youtube &&
        socialSuccess.instagram &&
        socialSuccess.twitter ? (
          <button
            onClick={() => setShowSocialInvitation(false)}
            className="w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52"
            style={poppins.style}
          >
            CONTINUE
          </button>
        ) : (
          <div className="group w-full xs:w-52">
            <div className="popover rounded-lg bg-white px-4 py-2 text-center text-sm text-red-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
              <p>Click the icon above first.</p>
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
      </div>
      <SocialIconStepper activeStep={activeStep} />
    </>
  );
}
