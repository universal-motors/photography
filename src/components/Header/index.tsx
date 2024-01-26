"use client";
import BCo from "@/assets/images/bco.png";
import Dehazeicon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Image from "next/image";
import { useState } from "react";
export default function Header() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <div className=" ">
      <div className=" flex text-[18px] text-center md:text-[14px] justify-end p-2 bg-[#C7B2A2] font-bold text-[white]  ">
        <div className="flex-col  md:flex-row ">
          Let me guess you built your first website yourself and you've grownout
          of it.Shop our template collection
          <TrendingFlatIcon />
        </div>
      </div>

      <div className="flex justify-between items-center h-24">
        <div>
          <Image className="h-14  w-[80px] h-41 p-2" src={BCo} alt="" />
        </div>
        <div className="  !hidden lg:!flex items-center gap-8 px-14 ">
          <div className="flex text-[12px] lg:text-[14px] gap-8">
            <p>About</p>
            <p>Home</p>
            <p>Portfolio</p>
            <p>Services</p>
            <p>For Designers</p>
            <p>Tools</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>

          <div className="border border-black  px-4 py-1 rounded-2xl text-[12px] xl:text-[16px]">
            <button>Shop Templates</button>
            <ShoppingCartIcon />{" "}
          </div>
        </div>
        <div className="!flex lg:!hidden items-center px-2">
          <Dehazeicon />
        </div>
      </div>
    </div>
  );
}
