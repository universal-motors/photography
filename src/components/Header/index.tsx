"use client";
import Link from "next/link";
import { useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Image from "next/image";
import BCo from "@/assets/images/bco.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Header() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <div className="">
      <div className=" flex justify-end p-2 bg-[#C7B2A2] font-bold text-[white]  ">
        Let me guess you built your first website yourself and you've grownout
        of it.Shop our template collection
        <TrendingFlatIcon />
      </div>

      <div className="flex justify-between">
        <div>
          <Image className="h-14 mt-6 w-[80px] h-41 p-2" src={BCo} alt="" />
        </div>
        <div className="flex gap-8 px-14 mt-6">
          <p>Home</p>
          <p>About</p>
          <p>Portfolio</p>
          <p>Services</p>
          <p className=" text-[8px] lg:text-[16px]">For Designers</p>
          <p>Tools</p>
          <p>Contact</p>
          <p>Blog</p>
          <div className="border border-black rounded-full h-11 p-4 py-1 text-[12px] w-48 xl:text-[16px]">
            <button>Shop Templates</button>
            <ShoppingCartIcon />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
