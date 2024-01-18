import React from "react";
import Laptop from "@/assets/images/laptop.png";
import Laptop2 from "@/assets/images/laptop2.png";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import { WidthFull } from "@mui/icons-material";

export default function Showitsection() {
  return (
    <div className=" text-center items-center pt-4 flex-wrap overflow-hidden">
      <div>
        <h3 className="text-[16px] text-[#131313] font-thin mt-10">
          {" "}
          READY FOR A WEBSITE THAT’S A VIBE?
        </h3>
        <div className="text-[46px] text-[#131313] font-sans mt-4">
          <p>
            Showit DESIGNER <i>of the</i> YEAR{" "}
          </p>
          <p>
            {" "}
            Serving <i>Wedding</i> Photographers
          </p>
        </div>
        <div className="text-[17px] text-[#131313] space-y-2 mt-3">
          <p>
            At The Buffalo Collective, every brand is rooted in your story,
            uniquely
          </p>{" "}
          <p>
            {" "}
            handcrafted to evoke emotion in the hearts of your DREAM clients. As
            the 2021{" "}
          </p>{" "}
          <p>
            Showit Designer of the Year, we’re the destination for photographers
            and
          </p>{" "}
          <p>
            wedding professionals are ready for a brand and who website that is
            modern,
          </p>{" "}
          <p>impactful, and elevated through every detail.</p>
        </div>
        <div className=" flex justify-center  flex-col items-center sm:items-start md:flex-row gap-52 mt-16 mb-10 flex-wrap ">
          <div className=" w-[80%] sm:w-[250px] flex gap-9  ">
            <div className="text-[#131313] text-[20px] lg:text-[32px] ">
              <p>
                Custom <i>design</i>{" "}
              </p>
            </div>

            <Image src={Laptop} alt="" />
          </div>
          <div className="w-[80%] sm:w-[250px]  flex items-end !gap-8">
            <Image src={Laptop2} alt="" />
            <div className="text-[#131313] text-[19px] sm:text-[22px]   ">
              <p>
                {" "}
                <i>Shop</i> Templates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
