import React from 'react'
import Link from "next/link";
import Image from "next/image";
import girl from "@/assets/images/girl.jpg"

export default function Clients() {
    return (
        <div>

            <section className=" bg-[#F5F5F5] w-full table relative h-[60vh]  items-center overflow-hidden">
                <Image
                    src={girl}
                    alt="Background Image"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0px",
                    }}
                />
                <div className="absolute inset-0 bg-black  opacity-40"></div>


                <div className=" text-white leading-10 text-[14px] py-24  px-[20%] absolute sm:!text-[24px]">
                    <p>From Our Clients...</p>
                    <p>"I'm making over 100k a year and working with  </p>
                    <p>my IDEAL CLIENT at every single wedding</p>
                    <p>TRULY, your work has changed my BUSINESS,</p>
                    <p>which in return has changed my life."</p>
                    <p>-Corrin Jasinki,Photographer</p></div>


            </section>

        </div >
    )
}

