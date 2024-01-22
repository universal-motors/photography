import React from "react";
import Image from "next/image";
import girl from "@/assets/images/glrlImage1.jpg";
export default function Photographerturned() {
  return (
    <div className="flex flex-wrap justify-center items-center mt-20 gap-20">
      <div>
        <Image
          className="w-[90%] sm:w-[425px] h-[608px] flex ml-4"
          src={girl}
          alt=""
        />
      </div>
      <div className="w-[90%] sm:w-[500px]">
        <p className="text-[32px]">
          photographer-turned-designer creating emotion driven BRANDS and
          WEBSITES for photographers ready to rediscover their "why" and fall
          back in love with their business.
        </p>
        <p className="text-[14px] mt-6">
          Twelve years ago, I was a wedding photographer who loved being
          creative but didn’t feel totally at home in my work. It was only when
          I discovered Showit, the drag-and-drop website platform that I
          realized I enjoyed building my website more than I liked doing
          anything else.
        </p>
        <p className="text-[14px] mt-6">
          That was when I combined my knowledge of the wedding industry with my
          passion for design and founded The Buffalo Collective, lovingly named
          for my hometown of Buffalo, NY and the artist community I fell in love
          with.
        </p>
      </div>
    </div>
  );
}
