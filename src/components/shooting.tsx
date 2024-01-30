import React from "react";

export default function Shooting() {
  return (
    <div className="border-t-[3px] border-black mt-32 flex-wrap">
      <div className="flex m-auto justify-center items-center sm:items-start mt-8 mb-8 flex-col md:flex-row ">
        <div className="flex  gap-3">
          <p className=" text-[48px]">6</p>
          <div className="flex flex-col sm:flex-row py-2">
            <p className="text-[24px] xl:text-[38px] text-[#131313] font-light">
              Years spent{" "}
            </p>
            <p className="text-[24px] xl:text-[38px] text-[#131313] font-light">
              shooting weddings
            </p>
          </div>
        </div>
        <div>
          <p className="text-[14px] px-2">
            Yep, before I was a designer I photographed <br />
            weddings, and I quickly realized it was not my passion!
          </p>
        </div>
      </div>
      <div className="border-t-[3px] border-black text-[14px] overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row gap-1 justify-center items-center sm:items-start mt-8 mb-8">
          <div className="text-[14px] text-[#131313]  ">
            <p>We're OG....we were grandfathered into the Showit </p>
            <p>Design Partner program when it began in 2014! </p>
          </div>

          <div className="flex overflow-hidden gap-1">
            <p className="text-[48px] text-[#131313]">
              10
              <span className="text-[28px] md:text-[36px] font-light ">
                Years{" "}
              </span>{" "}
            </p>
            <p className="text-[18px] md:text-[30px] vertical-text -rotate-90 text-[#131313] px-6">
              AS{" "}
            </p>
            <p className="text-[20px] md:text-[40px] text-[#131313] p-3 pl-2">
              A Showit Design Partner
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-[3px] border-black text-[14px] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-7 justify-center items-center sm:items-start mt-8 mb-8">
          <div className="  text-[#131313] flex gap-3">
            <p className=" text-[38px] md:text-[42px] text-[#131313]">1446+ </p>
            <div className="flex flex-col md:flex-row ">
              <p className="text-[18px]  xl:text-[20px] text-[#131313] ">
                TEMPLATE SOLD
              </p>
              <p className="text-[18px] xl:text-[20px] font-light ">
                SINCE 2017{" "}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <p className="text-[14px] md:text-[14px] text-[#131313]">
              One of our proudest stats to date. We had{" "}
              <a href="beyly" target="_self">
                {" "}
                one of the <br /> top selling designs
              </a>{" "}
              out of ALL Showit templates in <br /> 2020, 2021, 2022, and 2023!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
