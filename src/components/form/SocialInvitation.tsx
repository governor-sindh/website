import Link from "next/link";
import { Poppins } from "next/font/google";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
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
    <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-10 md:px-6">
      <h2 className="text-xl xs:text-3xl text-main" style={poppins.style}>
        Please take a moment to subscribe to our social media for latest updates
      </h2>
      <div className="mt-4 flex gap-6">
        <Link
          href={"https://www.facebook.com/governorsindhinitiative"}
          target="_blank"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4267B2] text-white"
        >
          <FaFacebookF className="h-6 w-6" />
        </Link>
        <Link
          href={"https://www.youtube.com/@KamranTessorikk"}
          target="_blank"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white"
        >
          <FaYoutube className="h-6 w-6" />
        </Link>
      </div>
      <button
        onClick={() => setShowSocialInvitation(false)}
        className="mt-5 w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed md:w-52"
        style={poppins.style}
      >
        Continue
      </button>
    </div>
  );
}
