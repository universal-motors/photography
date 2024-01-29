import React from "react";

export default function Energy() {
  return (
    <section className=" bg-[#F5F5F5] pt-[100px] w-full table relative h-[60vh]  items-center overflow-hidden">
      <div className="w-full bg-[#F5F5F5] ">
        <div className="flex !flex-wrap md:!flex-nowrap justify-center  gap-20   text-justify ">
          <div className=" text-[28px] md:text-[35px] w-[601px] mt-10 md:py-32  !px-28 md:!px-12">
            When you DEDICATE so much of your{" "}
            <span className="italic">artistic energy</span> and time to your
            clients, it makes sense that sometimes your own business{" "}
            <span className="italic">takes a backseat.</span>
          </div>

          <div className="flex  flex-col  md:!py-44">
            <div className="   text-[26px] md:text-[18px] w-[383px] ">
              When your visuals effortlessly resonate with the heads and hearts
              of your ideal clients, you can shift your pricing up to a new
              level and dive more fully into the work that lights you up,
              knowing that you can trust your brand to have your back and go the
              distance.
            </div>
            <div className=" text-[20px] md:!text-[15px] w-[364px] mt-8 leading-8">
              It’s time to hand over the reins to a designer who understands you
              and your industry, inside and out.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
