"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
const Counter = () => {
  const [Counter, setCounter] = useState(0);
  const [loader, setLoder] = useState(true);
  useEffect(() => {
    fetchCounterValue();
  }, []);

  const fetchCounterValue = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/counter");
      const data = await response.json();
      await setCounter(data);
      setLoder(false);
    } catch (error) {
      console.error("Error:", error);
      setLoder(false);
    }
  };
  return (
    <div className="ml-5 mt-3 flex w-40 flex-row border-l-2 ">
      <h1 className="ml-5 w-full pt-3 text-center text-xl font-semibold tracking-widest text-main sm:w-52 sm:pt-4 sm:text-3xl">
        {loader ? (
          <div className="ml-0 w-full text-center text-[1.125rem] font-normal tracking-wider text-main sm:w-40 sm:pt-1 sm:text-base">
            loading...
          </div>
        ) : (
          
          <div className="w-20">
            <CountUp start={0} end={Counter}
            />
          </div>
        )}
      </h1>
      
      <h1 className="w-full text-center text-[0.5rem] sm:pt-[10px] tracking-wider text-main sm:ml-4 sm:text-base">
        {loader ? " " : "Accepted Applications "}
      </h1>
    </div>
  );
};

export default Counter;
