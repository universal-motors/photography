import React from "react";
import Image from "next/image";
import stock from "@/assets/images/stocksy.jpg";

export default function Build() {
  return (
    <div className="relative">
      <div className=" ">
        <Image
          style={{
            width: "100%",
            height: "60vh",
            objectFit: "cover",
            position: "absolute",
          }}
          src={stock}
          alt=""
        />
      </div>

      <div className="absolute inset-0 bg-black  opacity-40 h-[60vh]"></div>
      <div className=" relative w-[90%]  flex flex-col items-center justify-center py-16 m-auto ">
        <div className="text-[32px] sm:text-[55px] lg:text-[81px] text-[white] mt-32">
          <p>
            <i>Build </i> a brand <i> that's</i>{" "}
          </p>
        </div>
        <div className="text-[34px] sm:text-[55px] lg:text-[81px] text-[white] flex gap-6">
          <p>beautifully</p>
          <p className="font-serif mt-6">yours</p>
        </div>

        <div className="flex flex-col text-center md:items-start text-[20px] sm:text-[24px] font-bold text-[white]">
          <p>
            Custom branding and Showit website design for wedding photographers
          </p>
        </div>
      </div>
    </div>
  );
}
