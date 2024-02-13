import React from "react";
import background from "@/assets/images/backgroundimage1.jpg";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative">
      <Image
        src={background}
        style={{
          width: "100%",
          height: "60vh",
          objectFit: "cover",
          position: "absolute",
        }}
        alt=""
      />

      <div className="relative inset-0 bg-black flex justify-center  opacity-40 h-[60vh]">
        <div className=" text-[white] w-[90%] lg:w-[872px]  flex flex-col justify-center items-center ">
          <div className="text-[10px] sm:text-[14px] ">
            <p> SHOWIT DESIGN PARTNER SERVING PHOTOGRAPHERS</p>
          </div>
          <div className="text-[30px] md:text-[44px] w-[90%] lg:w-[872px] text-center mt-4">
            <p>
              {" "}
              Warm, layered, emotion-driven design for passionate wedding
              photographers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
