"use client";
import Image from "next/image";
import girl from "@/assets/images/girl pic.jpg";
import Typewriter from "typewriter-effect";
import { Box } from "@mui/material";
import { Fullscreen } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import Homepage from "@/components/herosection";
import Laptop from "@/assets/images/laptop.png";
import Laptop2 from "@/assets/images/laptop2.png";
import Showitsection from "@/components/showitsection";
import Shooting from "@/components/shooting";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Homepage />
      <div>
        <Showitsection />
        <Shooting />
      </div>
    </Box>
  );
}
