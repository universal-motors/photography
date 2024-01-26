import React from "react";

export default function Portfoliofooter() {
  return (
    <div className=" flex flex-col lg:flex-row gap-10 justify-center items-center text-center mt-28 w-[400px] lg:w-[100%] m-auto">
      <div className="text-[black] text-[28px] lg:text-[31px]">
        <h2>
          <i>Collect killer client reviews</i>
        </h2>
        <p className="text-[black] text-[18px] !hidden md:!flex justify-end">
          <a
            className="border-b-2 border-black"
            href="https://thebuffalocollective.com/"
          >
            GET THE GUIDE →
          </a>
        </p>
      </div>
      <div className="text-[black] mb-10">
        <p className="  text-[14px] ">
          Struggling to get rave reviews from your clients? Download <br /> our
          free guide to discover how to ask the right questions to <br /> make
          your reviews section something people want to read.
        </p>
        <p className="text-[black] whitespace-nowrap text-[18px] !flex justify-center md:!hidden py-6  ">
          <a className=" sm:border-b-2 border-black" href="">
            GET THE GUIDE →
          </a>
        </p>
      </div>
    </div>
  );
}
