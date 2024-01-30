import React from "react";
import Image from "next/image";
import branding from "@/assets/images/BRANDING.png";

export default function Branding() {
  return (
    <div className="w-full  bg-[#F9F8F6]">
      <div className="flex flex-wrap justify-center gap-20">
        <div className="  flex flex-col   justify-center   w-[451px] ">
          <div className=" text-[12px]">
            <p>OPTION ONE</p>
          </div>
          <div className=" text-[30px] mt-2">
            <p>Branding + Custom Showit Website and Blog</p>
          </div>
          <div className=" text-[14px] mt-2 ">
            <p>
              This package is for those who have been in business for 3-5 years
              (or more) and have outgrown their current brand and website.
              Payment plan available.
            </p>
          </div>
          <div className="  mt-2">$8500</div>
          <button className="border w-36 border-black rounded-full p-2 mt-4">
            READ MORE
          </button>
        </div>

        <div>
          <Image
            className="w-[380px] h-[446px] mt-6 mb-20"
            src={branding}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
