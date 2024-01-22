import { Button } from "@mui/material";
import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/images/img1.png";

export default function Case() {
  return (
    <div>
      <div className="w-full  bg-[#f5f5f5]  ">
        <div className="flex flex-col lg:!flex-row justify-center items-center  gap-20 py-36">
          <div className="flex flex-col  w-[90%] sm:w-[500px]">
            <div className=" flex flex-col py-16 !text-xl xl:!text-4xl pr-11">
              <p className="italic text-2xl ">Case Study-</p>
              <p>Amethyst Event Productions</p>
            </div>

            <div className=" tracking-wide border-b-[1px] !text-[14px] xl:!text-[16px] border-b-black pb-2 ">
              <p>THE PROBLEM</p>
              <p>
                {" "}
                Jessica had her systems and workflow locked in, but she was{" "}
              </p>
              <p>
                {" "}
                struggling with her online presence and attracting the right
                client.
              </p>
            </div>

            <div className="tracking-wide mt-6 border-b-[1px] !text-[14px] xl:!text-[16px] border-b-black pb-2">
              <p>THE PROJECT</p>
              <p>
                We chose a rusty orange, neutrals, and a deep charcoal{" "}
                <span className="underline">for her</span>
              </p>
              <p>
                <span className="underline">brand</span> colors and created a
                unique template-based website using
              </p>
              <p>
                our <span className="underline">Claremont template</span>.
              </p>
            </div>

            <div className=" tracking-wide mt-6 !text-[14px] xl:!text-[16px]">
              <p>THE RESULTS</p>
              <p>
                Jessica's income doubled within 3 months of launching her site.
              </p>
              <p>
                {" "}
                She started booking more of her ideal client because she has a
              </p>
              <p>website that allows her to stand out from her competition.</p>
              <div className=" border border-black w-36 rounded-full text-center mt-6">
                <Button>READ MORE</Button>
                <TrendingFlatIcon />
              </div>
            </div>
          </div>
          <Image
            className="w-[90%] sm:w-[500px] h-[599px]"
            style={{ objectFit: "cover" }}
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
