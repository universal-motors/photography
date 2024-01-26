import React from "react";
import Image from "next/image";
import stock from "@/assets/images/stocksy.jpg";

export default function Build() {
  return (
    <div className="relative">
      <div className="">
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
      <div className=" relative w-[90%] lg:w-[872px]  flex flex-col text-center">
        <div className="text-[81px] text-[white]">
          <p>
            <i>Build </i> a brand <i> that's</i>{" "}
          </p>
        </div>
        <div className="text-[81px] text-[white] flex gap-6">
          <p>beautifully</p>
          <p className="font-serif">yours</p>
        </div>
      </div>
    </div>
  );
}
