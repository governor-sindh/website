"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetchCounterValue();
  }, []);

  const fetchCounterValue = async () => {
    try {
      const response = await fetch("/api/counter");
      const data = await response.json();

      setCounter(data.counter);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      return error;
    }
  };
  return (
    <>
      <div className="mt-2 flex h-24 w-full flex-col items-center sm:mt-7">
        {counter ? (
          <>
            <h1 className="flex-col text-center  text-xl font-semibold tracking-widest text-main sm:pt-4 sm:text-3xl">
              {loader ? (
                " "
              ) : (
                <div className="w-36">
                  <CountUp start={0} end={100} />
                </div>
              )}
            </h1>

            <h1 className="mb-5 text-xs tracking-wider text-main sm:mb-0 sm:text-sm">
              {loader ? " " : "Accepted Applications "}
            </h1>
          </>
        ) : (
          " "
        )}
      </div>
    </>
  );
};
