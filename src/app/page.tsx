"use client";
import Clients from "@/components/clients";
import Templates from "@/components/templates";

// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import Homepage from "@/components/herosection";
import Shooting from "@/components/shooting";
import Showitsection from "@/components/showitsection";
import { Box } from "@mui/material";
import Business from "@/components/business";
import Case from "@/components/case";
import Designer from "@/components/designer";
import Black from "@/components/black";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Homepage />
      <div>
        <Showitsection />
        <Shooting />
      </div>
      <Clients />

      <Templates />
      <Business />
      <Case />
      {/* <Designer /> */}
      <Black />
    </Box>
  );
}
