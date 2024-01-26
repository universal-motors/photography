import React from "react";
import Image from "next/image";
import connectionbg from "@/assets/images/connectionbg1.jpg";
export default function Build() {
  return (
    <div className="mt-1 relative ">
      <Image
        style={{
          width: "100%",
          height: "40vh",
          objectFit: "cover",
          position: "absolute",
        }}
        src={connectionbg}
        alt=""
      />
      <div className="w-[100%] flex justify-center pt-32 sm:pt-20 xl:pt-12">
        <div className="relative text-white w-[620px] text-center text-[30px] sm:text-[45px] flex flex-col items-center ">
          Build connection with an emotionally-driven brand made to be
          beautifully yours.
          <div>
            <button className="text-[12px] sm:text-[14px] border !px-3 sm:!px-6 py-3 rounded-full">
              DISCOVER A BRAND THAT'S TRULY YOURS →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
