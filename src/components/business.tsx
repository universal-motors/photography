import React from "react";
import Link from "next/link";
import Image from "next/image";
import crop1 from "@/assets/images/crop1.png";

export default function Business() {
  return (
    <div>
      <section className="w-full  bg-white   relative items-center ">
        <Image
          src={crop1}
          alt="Background Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
        <div className=" inset-0 bg-black w-full h-full  opacity-40 absolute top-0"></div>
        <div className="relative">
          <div className=" text-white flex flex-col !w-[90%] sm:!w-[100%] items-center   py-44 ">
            <div className=" !text-[35px]  sm:!text-[46px] font-medium  italic text-center">
              <p> Have you fallen out of love with your business?</p>
            </div>
            <div className="flex !flex-col sm:!flex-col !text-[12px]   sm:!text-[26px] font-thin text-center">
              <p> *interactive quiz coming soon for you here!</p>

              <p>*check back soon! </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
