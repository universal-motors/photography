import React from "react";

export default function Energy() {
  return (
    <section className=" bg-[#F5F5F5] pt-[100px] w-full table relative h-[60vh] overflow-hidden">
      <div className="w-full bg-[#F5F5F5] ">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-2 xl:gap-10 flex-wrap">
          <div className=" text-[30px] sm:text-[35px] w-[601px] mt-20   px-8">
            When you DEDICATE so much of your
            <i>artistic energy </i>
            and time to your clients, it makes sense that sometimes your own
            business
            <i>takes a backseat.</i>
          </div>

          <div className="flex  flex-col mt-24 w-[500px]  items-center">
            <div className="  text-[24px] sm:text-[18px]">
              When your visuals effortlessly resonate with the heads and hearts
              of your ideal clients, you can shift your pricing up to a new
              level and dive more fully into the work that lights you up,
              knowing that you can trust your brand to have your back and go the
              distance.
            </div>
            <div className=" text-[20px] sm:text-[15px]   mt-3 leading-8">
              It’s time to hand over the reins to a designer who understands you
              and your industry, inside and out.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
