"use client";
import Clients from "@/components/clients";
import Templates from "@/components/templates";

// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import Black from "@/components/black";
import Business from "@/components/business";
import Case from "@/components/case";
import Discover from "@/components/discover";
import Homepage from "@/components/herosection";
import { Box } from "@mui/material";
import Designer from "@/components/designer";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Homepage />
      <div>
        {/* <Showitsection /> */}
        {/* <Shooting /> */}
      </div>
      {/* <Clients /> */}
      {/* <Templates /> */}
      <Discover />
      <Templates />
      <Business />
      <Case />
      <Designer />
      <Black />
    </Box>
  );
}
