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
import Box from "./Box";


interface SidebarProps { 
    children: React.ReactNode;
    active?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({}) => {
     
 
  return (
    <section className="
                fixed
                top-0
                right-0
                z-40
                flex
                flex-col
                p-4
                items-center
                bg-darkgray
                w-[400px]
                h-screen
                space-y-8
                "
                >
                    
        <Image
        alt="image"
        src="https://i.ibb.co/jrSj99T/evilneurosama2.webp"
        width={56}
        height={56}
        objectFit="contain"
      />
      <hr className="w-14 h-1 bg-blackgray border-0 rounded"></hr>
      <div className="
                flex
                flex-col
                pt-10
                space-y-20
                "
                >
                    <Box className="overflow-y-auto h-full">
                       
                    </Box>       
      </div>
      
    </section>
  );
}

export default Sidebar;