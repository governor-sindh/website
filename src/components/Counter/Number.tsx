"use client";
import CountUp from "react-countup";
import React from "react";

const Number = ({ noOfApplications }: { noOfApplications: number }) => {
  console.log("noOfApplications", noOfApplications);
  return (
    //    {noOfApplications?<div className="w-36">
    //    <CountUp start={0} end={noOfApplications} />
    //  </div>:""}

    <>
      {noOfApplications !== 0 ? (
        <div className="w-36">
          <CountUp start={0} end={noOfApplications} />
        </div>
      ) : null}
    </>
  );
};

export default Number;
