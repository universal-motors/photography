import React from "react";
import Image from "next/image";
import mobileimage from "@/assets/images/mobileimage1.png";
import mobileimage2 from "@/assets/images/mobileimage2.png";
export default function Collective() {
  return (
    <>
      <div className="!hidden lg:!flex relative text-white w-[100%] ">
        <div>
          <Image
            className=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
            src={mobileimage}
            alt=""
          />
        </div>
        <div className="relative w-[469px] ml-20 lg:ml-48 xl:ml-80 flex flex-col justify-center mb-6 lg:!mt-32 2xl:!mt-14">
          <div className="text-[18px] ">FROM THE COLLECTIVE..</div>
          <div className="text-[34px] mt-5">
            "I'm BLOWN AWAY by the massive change you made in my business. In
            the three months following the launch my income DOUBLED what I made
            in the first half of the year! I honestly wish I did this sooner!"
          </div>
          <div className="text-[16px] mt-5">
            - Jessica Gonzales, Amethyst Event Productions
          </div>
        </div>
      </div>
      <div className="bg-[#8A8175] !flex lg:!hidden flex-col items-center">
        <div className="mt-8">
          <Image src={mobileimage2} style={{ height: "100%" }} alt="" />
        </div>
        <div className="w-[90%] mb-5">
          <div className="   flex flex-col  text-[white] mt-7">
            <div className="text-[18px]">FROM THE COLLECTIVE..</div>
            <div className="text-[20px] md:text-[34px] mt-5">
              "I'm BLOWN AWAY by the massive change you made in my business. In
              the three months following the launch my income DOUBLED what I
              made in the first half of the year! I honestly wish I did this
              sooner!"
            </div>
            <div className="text-[16px] mt-5">
              - Jessica Gonzales, Amethyst Event Productions
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
