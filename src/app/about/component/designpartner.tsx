import React from "react";
import Image from "next/image";
export default function Designpartner() {
  return (
    <div className="bg-[#F5F5F5] pb-14">
      <div className="flex flex-col md:flex-row justify-evenly !items-center md:!items-start pt-20">
        <div className="w-[90%] sm:w-[389px]">
          <div className="text-[26px] font-semibold">
            What does it take to become a Showit Design Partner?
          </div>
          <div className="mt-6">
            <Image
              src={
                "https://static.showit.co/file/ZM45ELkxRwuksFDXG4fvcA/29419/showit_dp_blackoutline.svg"
              }
              alt=""
              width={126}
              height={40}
            />
            <p className="text-[9px] font-semibold ml-20 mt-1">10 YEARS</p>
          </div>
        </div>
        <div className="text-[#3F3F3F] w-[90%] sm:w-[499px] mt-10 md:mt-0">
          <div>
            Although there are admittedly many Showit designers, few are chosen
            to become Showit Design Partners. In 2014, Showit launched their
            partner program, and that’s when I became one of the first designers
            accepted.
          </div>
          <div className="mt-6">
            To make it onto this prestigious list of designers, you have to pass
            their design standards course, follow and uphold the designers code
            of conduct, regularly create Showit templates that benefit the
            community, and submit designs that are reviewed for their quality,
            ease of use, and aesthetic.
          </div>
          <div className="mt-6">
            To this day, there are less than 100 designers in the program, and
            fewer than ten who have been selected as Showit Designer of the
            Year, which we were awarded in 2021.
          </div>
          <div className="mt-6">
            To say that you’re working with a Showit pro is an understatement.
            With over 12 years experience on this platform, you can rest
            confident that whether you choose a website template or a custom
            design experience, you’re coming away with the best possible design
            for your business.
          </div>
        </div>
      </div>
    </div>
  );
}
