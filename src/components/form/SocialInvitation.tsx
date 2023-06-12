import { Poppins } from "next/font/google";
import { Icons } from "@/components";
import type { Dispatch, SetStateAction } from "react";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function SocialInvitation({
  setShowSocialInvitation,
}: {
  setShowSocialInvitation: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
      <h2
        className="text-center text-xl text-main xs:text-3xl"
        style={poppins.style}
      >
        Please take a moment to subscribe to our social media for latest updates
      </h2>
      <Icons />
      <button
        onClick={() => setShowSocialInvitation(false)}
        className="w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52"
        style={poppins.style}
      >
        CONTINUE
      </button>
    </div>
  );
}