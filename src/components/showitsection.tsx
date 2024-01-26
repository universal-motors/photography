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
        <div className=" flex justify-start md:justify-center  flex-col items-center md:flex-row  gap-0 md:gap-52 mt-16 mb-10 ">
          <div className="  w-[90%] lg:w-[400px] flex gap-2 md:gap-9 relative top-9 md:top-0">
            <div className="text-[#131313] text-[20px] lg:text-[32px] !hidden md:!flex ">
              <p>
                Custom <i>design</i>{" "}
              </p>
            </div>
            <div>
              <Image
                src={Laptop}
                className=" w-[60%] lg:w-[395px]"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className="text-[#131313] text-[14px] lg:text-[32px] !flex md:!hidden">
              <p>
                Custom <i>design</i>{" "}
              </p>
            </div>
          </div>
          <div className="w-[90%] lg:w-[420px]  flex items-end gap-2 md:gap-8  ">
            <div className="text-[#131313] text-[14px] xl:text-[20px] !flex md:!hidden">
              <p>
                {" "}
                <i>Shop</i> Templates
              </p>
            </div>
            <div>
              <Image
                className=" w-[60%] lg:w-[395px]"
                style={{ objectFit: "cover" }}
                src={Laptop2}
                alt=""
              />
            </div>

            <div className="text-[#131313] text-[18px] xl:text-[20px]  !hidden md:!flex">
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
