"use client";
import Templates from "@/components/templates";
import Black from "@/components/black";
import Business from "@/components/business";
import Case from "@/components/case";
import Discover from "@/components/discover";
import Homepage from "@/components/herosection";
import { Box } from "@mui/material";
import Showitsection from "@/components/showitsection";
import Clients from "@/components/clients";
import Shooting from "@/components/shooting";
import Designer from "@/components/designer";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Homepage />

      <Showitsection />
      <Shooting />

      <Clients />
      <Templates />
      <Discover />
      <Templates />
      <Business />
      <Case />
      <Designer />
      <Black />
    </Box>
  );
}
