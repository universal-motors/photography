import React from "react";
import Link from "next/link";
import Image from "next/image";
import tablet from "@/assets/images/tablet.jpg";
import girl1 from "@/assets/images/girl1.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Button } from "@mui/material";
export default function Designer() {
  return (
    <div className="w-full ">
      <section className="  w-full relative  sm:!h-[50vh]  bg-white  ">
        <Image
          src={tablet}
          alt="Background Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
        <div className=" inset-0 bg-black w-full h-full  opacity-50 absolute top-0"></div>
        <div>
          <div className="relative  h-[20%] flex  justify-center top-48">
            <Image className="!w-[80%] md:!w-[279px]" src={girl1} alt="" />
          </div>

          <div className="w-full bg-[#F5F5F5]">
            <div className=" relative  text-[#FFFFFF]  !text-[50px]  md:!text-[81px] flex flex-wrap justify-center bottom-2 ">
              MEET<span className="italic">the</span>DESIGNER
            </div>
            <div className="py-28 flex flex-col items-center  ">
              <p className=" text-[14px] font-medium tracking-widest">
                Hey,I'M CHRISTINA!
              </p>
              <p className=" !text-[16px] sm:!text-[41px] pl-4">
                BRANDING and SHOWIT Website Design
              </p>
              <p className="!text-[16px] sm:!text-[41px] pl-4">
                for Wedding PHOTOGRAPHERS
              </p>
              <div className=" !text-[12px] sm:!text-[14px] tracking-wider pl-4 text-justify pr-4">
                <p>
                  As a wedding photographer-turned-designer, I’ve been a Showit
                  user for over
                </p>
                <p>
                  ten years and an OG Showit Design Partner since 2014, when the
                  program
                </p>
                <p>
                  began. I combine my knowledge of the wedding industry with my
                  passion for
                </p>
                <p>
                  design to create brands and websites that draw in your couples
                  with clean,
                </p>
                <p className="flex sm:!justify-center">
                  modern design that works hard for you.
                </p>
                <div className="flex justify-center">
                  <div className=" flex justify-center border border-black rounded-full p-3 !w-64 sm:!w-80  mt-5  ">
                    {" "}
                    <button>SEE WHAT WE HAVE IN COMMON </button>
                    <TrendingFlatIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
