import React from "react";
import Solo1 from "../../../public/solo1.jpeg";
import Solo2 from "../../../public/solo2.jpg";
import Solo3 from "../../../public/solo3.jpg";
import Image from "next/image";

function Text() {
  return (
    <div className="m-auto mt-20 w-[1300px] border-b border-zinc-300 pb-10 xl:w-[90%] lg:w-[95%] sm:mt-10">
      <h1 className="text-center text-[36px] font-extrabold leading-[2.5rem] text-main xl:text-[32px] sm:text-xl">
        Certified AI, Metaverse, and Web 3.0 Developer and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>
      <p className="mb-8 mt-10 text-justify text-[1.25rem] tracking-wider text-zinc-800 xl:text-[1.2rem] sm:mt-7 sm:text-[1rem] sm:tracking-normal">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="mt-10 grid grid-cols-3 gap-5 sm:grid-cols-1">
        <Image src={Solo1} alt="solo1" />
        <Image src={Solo2} alt="solo2" />
        <Image src={Solo3} alt="solo3" />
      </div>
    </div>
  );
}

export default Text;
