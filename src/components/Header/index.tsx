"use client";
// import LogoLight from "@/assets/images/logo-light.png";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return <nav className="" id="navbar"></nav>;
}
