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
    } catch (err) {
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {counter && !loader ? (
        <div className="flex w-full flex-col items-center mt-4 sm:mt-0">
          <>
            <div className="flex-col text-center text-xl font-semibold tracking-widest text-main sm:text-3xl">
              <div className="w-36">
                <CountUp start={0} end={counter} />
              </div>
            </div>

            <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">
              Accepted Applications
            </div>
          </>
        </div>
      ) : null}
    </>
  );
};
