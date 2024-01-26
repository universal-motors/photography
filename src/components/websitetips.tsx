import React from "react";
import Link from "next/link";
import Image from "next/image";
import tea from "@/assets/images/tea.jpg";
import book from "@/assets/images/book.jpg";
import frames from "@/assets/images/frames.jpg";

export default function Websitetips() {
  return (
    <div className="   w-[100%] bg-[#f5f5f5]  pb-16">
      <div className="flex  flex-wrap  justify-center py-5 gap-16 ">
        <div>
          <Image
            className="w-[320px] h-[485px] !px-5 sm:!px-0"
            src={tea}
            alt=""
          />
          <p className=" !text-[12px] md:!text-[14px] mt-4 !px-5 sm:!px-0">
            WEBSITE TIPS
          </p>
          <p className="!text-[22px] md:!text-[24px] w-[277px] !px-5 sm:!px-0">
            Does Your Website Have These 5 Things?
          </p>
        </div>

        <div>
          <Image
            className="w-[317px] h-[301px] !px-5 sm:!px-0"
            src={book}
            alt=""
          />
          <p className="text-[14px] mt-4 !px-5 sm:!px-0">DESIGN</p>
          <p className="text-[24px] w-[312px] !px-5 sm:!px-0 ">
            Tips For Designers Creating Their First Templates
          </p>
        </div>

        <div>
          <Image
            className="w-[317px] h-[423px] !px-5 sm:!px-0"
            src={frames}
            alt=""
          />
          <p className="text-[14px] mt-4 !px-5 sm:!px-0">BUSINESS</p>
          <p className="text-[24px] w-[312px] !px-5 sm:!px-0 ">
            7 Signs You Might Be Ready For a New Website
          </p>
        </div>
      </div>
    </div>
  );
}
