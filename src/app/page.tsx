"use client";
import Clients from "@/components/clients";
import Templates from "@/components/templates";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import Homepage from "@/components/herosection";
import Shooting from "@/components/shooting";
import Showitsection from "@/components/showitsection";
import { Box } from "@mui/material";
import Rediscover from "@/components/discover";
import Discover from "@/components/discover";

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
      <Discover />
    </Box>
  );
}
