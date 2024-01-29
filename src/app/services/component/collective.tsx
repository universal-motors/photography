import React from "react";
import Image from "next/image";
import chicago from "@/assets/images/chicago.jpg";

export default function Collective() {
  return (
    <div>
      <section className="  w-[100%] relative  h-[75vh]  bg-white  ">
        <Image
          src={chicago}
          alt="Background Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />

        <div className=" inset-0 bg-black w-full h-full  opacity-50 absolute top-0"></div>

        <div className="relative  flex  items-center justify-center top-56">
          <div className="w-[875px]  text-white ">
            <div className="text-[16px] py-3">From The Collective...</div>
            <div className=" text-[37px]">
              {" "}
              “Christina literally brought my vision TO LIFE. Since launching my
              new site I have raised my prices and new clients{" "}
              <span className="italic">
                know that the investment is beyond
              </span>{" "}
              WORTH IT just from landing on my site."
            </div>
            <div className="text-[16px] py-3">
              -Victoria Saint Martin, Photographer
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
