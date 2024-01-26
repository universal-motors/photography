import React from "react";
import Image from "next/image";
import girl2 from "@/assets/images/glrlImage2.jpg";
export default function ShowitDesign() {
  return (
    <div className="bg-[#4D4524]  w-[100%] text-[white] mt-28 pb-14">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center  pt-10 gap-20 ">
        <div className="w-[90%] sm:w-[450px]">
          <div className="text-[26px]">
            Today, we are a Showit Design Partner and 2021’s Showit Designer of
            the Year, with 100+ custom clients served, and thousands of
            templates sold to passionate creatives.
          </div>
          <div className="flex gap-5 mt-10">
            <div>
              Ultimately, I found my way as a wedding
              photographer-turned-designer with the skillset to draw in your
              couples with clean, modern design that works hard for you. Working
              from my studio, I’m passionate about helping others build
              businesses they want to work in.
            </div>
            <div>
              Honoring your vision but embracing creative freedom, I’m here to
              work with like-minded souls with a forever calling for following
              their own path in life. If that’s you, I’d love to hear your
              story, collaborate, and become the best of friends.
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-[90%] sm:w-[394px] h-[512px] rounded-tr-[100px] rounded-bl-[100px] ml-3"
            style={{ objectFit: "cover" }}
            src={girl2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
