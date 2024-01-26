import React from "react";
import Image from "next/image";
import vase from "@/assets/images/vase.jpg";
import tab from "@/assets/images/tab.jpg";
import frame from "@/assets/images/frame.jpg";

export default function Websitetips() {
  return (
    <div className="w-[100%]  bg-[#4D4524]">
      <div className="flex flex-wrap justify-center py-52 gap-14">
        <div className=" flex flex-col ">
          <div>
            <Image
              className="w-[331px]  h-[504px] !px-5 sm:!px-0"
              src={vase}
              alt=""
            />
          </div>
          <div className="text-white text-[14px] mt-4 !px-5 sm:!px-0">
            <p>WEBSITE TIPS</p>
          </div>
          <div className="text-white !text-[22px] sm:!text-[24px] py-2 w-[296px] !px-5 sm:!px-0">
            {" "}
            <p>Why I Recommend Working With A Copy writer For Your Website</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <Image
              className="w-[331px] h-[314px] !px-5 sm:!px-0"
              src={tab}
              alt=""
            />
          </div>
          <div className="text-white text-[14px] mt-4 !px-5 sm:!px-0">
            <p>BUSINESS</p>
          </div>
          <div className="text-white !text-[22px] sm:!text-[24px] py-2 w-[296px] !px-5 sm:!px-0 ">
            {" "}
            <p>How Having a Mediocre Website Was Costing Me Money</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <Image
              className=" !w-[310px]  sm:!w-[331px] h-[441px] !pl-8 sm:!pl-0"
              src={frame}
              alt=""
            />
          </div>
          <div className="text-white text-[14px] mt-4 !px-8 sm:!px-0">
            <p>BUSINESS</p>
          </div>
          <div className="text-white !text-[22px] sm:!text-[24px] py-2 w-[340px] !px-8 sm:!px-0">
            {" "}
            <p>7 Signs You Might Be Ready For A New Website</p>
          </div>
        </div>
      </div>
    </div>
  );
}
