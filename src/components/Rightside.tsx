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
    <div className=" 
                hidden
                md:flex                
                top-0
                right-0
                z-40                
                flex-col
                pt-4
                pl-4
                text-mattewhite        
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
    </div>
  );
}

export default Rightside;