import React from 'react'
import Link from "next/link";
import Image from "next/image";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import frame from "@/assets/images/frame.png";
import frame1 from "@/assets/images/newclaremont.png";
import CallMadeIcon from '@mui/icons-material/CallMade';

export default function Templates() {
    return (
        <div>
            <div className='w-full h-[60vh] bg-white '>
                <div className='!py-24 w-[75%] m-auto'>

                    <div className='flex justify-evenly flex-col gap-4 sm:flex-row ' >
                        <div className='flex flex-col gap-4 '>
                            <div><p className='text-sm font-medium '>NOT READY FOR A FULL CUSTOM SITE?</p></div>
                            <div><p className='text-2xl'>Shop Our Collection Of</p>
                                <p className='text-2xl'>Showit Website Templates</p></div>
                            <div><p className='text-sm'>Whether you’re new to Showit or already in love with the drag-</p></div>
                            <div> <p className='text-sm'>and-drop platform (seriously, it’s like Canva for your website!),</p> </div>
                            <div><p className='text-sm'>our fully customizable Showit templates are perfect for the </p> </div>
                            <div><p className='text-sm'> modern creative who needs a premium design for a fraction of </p></div>
                            <div><p className='text-sm'>the cost (and time). Choose your template, then upload your</p> </div>
                            <div><p className='text-sm'> fonts, colors, logo, and images. Launch to raving fans who can’t</p></div>
                            <div><p className='text-sm'>help but sign up to work with you.</p></div>

                            <div className='border border-black w-72 rounded-full px-1 py-3 text-sm text-center'> <button >SHOP OUR TEMPLATE COLLECTION</button>
                                <TrendingFlatIcon /></div>

                        </div>
                        <div className='flex flex-col  '><Image className='h-[80%] rounded-xl ' src={frame1} alt="" />
                            <div className='py-4'>Norwalk
                                <CallMadeIcon />
                            </div>
                        </div>


                    </div>

                </div>



            </div>
        </div>

    )
}
