"use client";
import Clients from "@/components/clients";
import Templates from "@/components/templates";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import { Box } from "@mui/material";
export default function HomePage() {
  return <Box sx={{ width: "100%" }}>
    <Clients />
    {/* <div>
      <div className="w-full h-96 bg-slate-600" >
        <div className="text-center text-white"><p>From Our Clients...</p>
          <p>"I'm making over 100k a year and working with  </p>
          <p>my IDEAL CLIENT at every single wedding</p>
          <p>TRULY, your work has changed my BUSINESS,</p>
          <p>which in return has changed my life."</p>
          <p>Corrin Jasinki,Photographer</p></div>

      </div>

    </div> */}

    <Templates />
  </Box>;
}
