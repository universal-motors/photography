import React from "react";
import girl from "@/assets/images/girl pic.jpg";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import FadeInOut from "./Texteffect";

export default function Homepage() {
  return (
    <section className="py-24 w-full table relative h-[60vh] ">
      <Image
        src={girl}
        alt="Background Image"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="w-[90%] sm:w-full relative flex flex-col justify-center items-center  h-full ">
        <div className="grid grid-cols-1  mt-10 w-[90%] sm:w-[700px] border-b-2 border-[#ffffff]  ">
          <h2 className="text-white text-[20px] ">The Buffalo Collective</h2>
          <div className="flex">
            <div className="text-white !text-[20px] sm:!text-[50px] md:!text-[75px] w-[90%] flex justify-between ">
              <Typewriter
                options={{
                  strings: ["Brand Design", "Showit Websites"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <div className="text-white ">
                <SearchIcon sx={{ fontSize: "39px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] sm:w-[650px]">
          <div className=" text-white mt-6 ">
            <FadeInOut />

            <h2 className="text-[16px] sm:text-[21px] mt-3 ml-2 mr-2">
              <p>
                The BIG DREAMS you have for your <br /> business are closer than
                you think.
              </p>
            </h2>
          </div>
          <div className="border border-white   text-center font-bold w-48 h-8 sm:h-10 flex justify-center items-center rounded-full mt-3 mb-4">
            <button className="text-white text-[14px] sm:text-[16px]">
              Let's Get Started →{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
