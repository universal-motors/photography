import React from "react";
import Image from "next/image";
import sophie from "@/assets/images/sophie8.png";
import img from "@/assets/images/social10.png";
import social from "@/assets/images/social11.png";

export default function Ourbrands() {
  return (
    <div>
      <div className="flex flex-col text-center  items-center">
        <h1 className="text-[22px] text-[#131313]">Portfolio</h1>
        <p className="text-[24px] md:text-[35px] mt-11 w-[90%] md:[100%]">
          Our brands and websites are designed to place your EXPERTISE <br />{" "}
          and YOUR STORY in the foreground, so you’re equipped are designed to{" "}
          <br /> connect
          <i> with the people you want to work with most.</i>
        </p>
      </div>
      <div className="flex flex-row gap-20 justify-center mt-20 flex-wrap">
        <div>
          <Image className="w-[315px] h-[375px]" src={sophie} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
        <div>
          <Image className="w-[315px] h-[375px]" src={img} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
        <div>
          <Image className="w-[315px] h-[375px]" src={social} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-20 justify-center mt-20 flex-wrap">
        <div>
          <Image className="w-[315px] h-[375px]" src={sophie} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
        <div>
          <Image className="w-[315px] h-[375px]" src={sophie} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
        <div>
          <Image className="w-[315px] h-[375px]" src={sophie} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-20 justify-center mt-20 flex-wrap">
        <div>
          <Image className="w-[315px] h-[375px]" src={sophie} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
        <div>
          <Image className="w-[315px] h-[375px]" src={sophie} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
        <div>
          <Image className="w-[315px] h-[375px]" src={sophie} alt="" />
          <div className="bg-white w-[315px] h-[125px] shadow-md flex flex-col gap-4 px-6">
            <h2 className="text-[15px] mt-6">Branding + Website</h2>
            <h2 className="text-[25px]">
              <i>Sophie Lindler</i>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
