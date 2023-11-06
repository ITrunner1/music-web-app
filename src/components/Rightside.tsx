"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation'
import {
  ChartBarIcon,
  ClockIcon,   
  HomeIcon,
} from "@heroicons/react/24/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri"; 
import { TbArrowBackUp } from "react-icons/tb";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import Library from "./Library";
import Box from "./Box";


interface SidebarProps { 
    children: React.ReactNode;
    active?: boolean;
}

const Rightside = () => {
      
  return (
    <section className="                
                top-0
                right-0
                z-40
                flex
                flex-col
                pt-4
                pl-4
                text-[#F2F3F4]         
                bg-darkgray
                w-[400px]
                h-screen
                space-y-8
                ">      
      <div className="">
          <Box className="overflow-y-auto h-full">
            <Library />            
          </Box>       
      </div>      
    </section>
  );
}

export default Rightside;