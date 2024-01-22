import React from "react";
import Image from "next/image";
import Hero from "./component/hero";
import Photographerturned from "./component/turned";
import ShowitDesign from "./component/ShowitDesign";
import Designpartner from "./component/designpartner";
import Collective from "./component/collective";
import Build from "./component/build";

export default function page() {
  return (
    <>
      <Hero />
      <Photographerturned />
      <ShowitDesign />
      <Designpartner />
      <Collective />
      <Build />
    </>
  );
}
