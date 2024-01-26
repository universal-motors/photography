import React from "react";
import Image from "next/image";
import background from "@/assets/images/background.jpg";

export default function Discover() {
  return (
    <div>
      <section className="w-[100%]  h-[40vh] md:h-[60vh] flex flex-col items-center pt-52  relative mt-16">
        <Image
          src={background}
          alt="Background Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
          }}
        />
        <div className="absolute inset-0 bg-black  opacity-20"></div>
        <div className="relative w-[90%] md:w-[750px] flex flex-col items-center justify-center">
          <div className="">
            <h2 className="text-[#ffffff] text-[25px] md:text-[45px] text-center flex-wrap ">
              <i>Rediscover your brand.</i> <br />
              Fall back in love with your business.
            </h2>
          </div>
          <div className="border border-white mt-8 text-center font-bold w-[297px] md:w-[397px] h-[50px] flex justify-center items-center rounded-full">
            <button className="text-white text-[18px]  font-semibold">
              custom showit website design →
            </button>
          </div>
        </div>
      </section>
      <div className=" flex flex-col lg:flex-row gap-10 justify-center items-center text-center mt-28 w-[400px] lg:w-[100%] m-auto">
        <div className="text-[black] text-[28px] lg:text-[31px]">
          <h2>
            <i>Collect killer client reviews</i>
          </h2>
          <p className="text-[black] text-[18px] px-56 !hidden md:!flex">
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
            Struggling to get rave reviews from your clients? Download <br />{" "}
            our free guide to discover how to ask the right questions to <br />{" "}
            make your reviews section something people want to read.
          </p>
          <p className="text-[black] whitespace-nowrap  text-[18px] px-56 !flex md:!hidden py-6">
            <a
              className=" sm:border-b-2 border-black"
              href="https://thebuffalocollective.com/"
            >
              GET THE GUIDE →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
