import React from "react";
import Link from "next/link";
import Image from "next/image";
import black from "@/assets/images/black.png";

export default function Black() {
  return (
    <div className=" flex  w-[100%] bg-black justify-center">
      <div className="  flex flex-col lg:flex-row  items-center justify-center gap-28 py-20 ">
        <div className="text-white w-[90%] sm:w-[450px]">
          <p className="text-[14px]  ">FROM OUR CLIENTS...</p>
          <div className="text-[28px] py-8">
            <p>
              “Christina has created some of the most ELEVATED and well-designed
              templates I’ve ever used! My SEO ranking has skyrocketed and I
              booked a DREAM WEDDING in New York City that same week."
            </p>
            <p className="text-[14px] py-3">
              -Kelsey Lauren,Claremont Template
            </p>
          </div>
        </div>
        <div>
          <Image
            className="w-[100%]  sm:w-[415px] h-[450px] "
            src={black}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
