"use client";
import BCo from "@/assets/images/bco.png";
import Dehazeicon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Image from "next/image";
import { useState } from "react";
import TemporaryDrawer from "../drawer";
export default function Header() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <div className=" fixed z-50 w-full">
    

      <div className="flex justify-between items-center  h-15 bg-[#ffffff] ">
        <div>
          <Image
            className="h-14  w-[80px] h-41 p-2"
            style={{ objectFit: "cover" }}
            src={BCo}
            alt=""
          />
        </div>
        <div className="  !hidden md:!flex  items-center gap-6 px-14   ">
          <div className="flex text-[12px] xl:!text-[14px] gap-2 lg:gap-8 ">
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
        <div className="!flex md:!hidden items-center px-2">
          <TemporaryDrawer />
        </div>
      </div>
    </div>
  );
}
