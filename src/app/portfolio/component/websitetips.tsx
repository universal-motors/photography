import React from "react";
import Image from "next/image";
import vase from "@/assets/images/vase.jpg";
import tab from "@/assets/images/tab.jpg";
import frame from "@/assets/images/frame.jpg";

export default function Websitetips() {
  return (
    <div className="w-full  bg-[#4D4524]">
      <div className="flex ">
        <div className=" flex flex-col ">
          <div>
            <Image className="w-[331px] h-[504px]" src={vase} alt="" />
          </div>
          <div className="text-white">
            <p>Website Tips</p>
          </div>
          <div className="text-white">
            {" "}
            <p>Why I Recommend Working With A Copywriter For Your Website</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <Image className="w-[331px] h-[314px]" src={tab} alt="" />
          </div>
          <div className="text-white">
            <p>Business</p>
          </div>
          <div className="text-white">
            {" "}
            <p>How Having a Mediocre Website Was Costing Me Money</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <Image className="w-[331px] h-[441px]" src={frame} alt="" />
          </div>
          <div className="text-white">
            <p>Business</p>
          </div>
          <div className="text-white">
            {" "}
            <p>7 Signs You Might Be Ready For A New Website</p>
          </div>
        </div>
      </div>
    </div>
  );
}
