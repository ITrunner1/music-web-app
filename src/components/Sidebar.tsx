"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation'
import {    
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri"; 
import { TbArrowBackUp } from "react-icons/tb";
import { BiSolidPlaylist } from "react-icons/bi"
import { GoVideo } from "react-icons/go"
import { useMemo } from "react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Rightside from "./Rightside";


interface SidebarProps { 
    children: React.ReactNode;
    active?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({children, active}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HomeIcon,
            label: 'Home',
            active: pathname === '/home',
            href: '/home',
        },
        {
            icon: RiCompassFill,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        },
        {
            icon: BiSolidPlaylist,
            label: 'Playlists',
            active: pathname === '/playlists',
            href: '/playlists',
        }, 
        {
            icon: FaMicrophoneAlt,
            label: 'Podcasts',
            active: pathname === '/podcasts',
            href: '/podcasts',
        },        
        {
            icon: ChartBarIcon,
            label: 'Chart',
            active: pathname === '/chart',
            href: '/chart',
        },               
        {
            icon: GoVideo,
            label: 'videos',
            active: pathname === '/videos',
            href: '/videos',
        },
        {
            icon: TbArrowBackUp,
            label: 'Back',
            active: pathname === '/back',
            href: '/back',
        },
    ], [pathname]);       
      
 
  return (
    <div className="
        flex
        h-full
        "
    >
    <div className="                
                top-0
                z-40
                flex
                flex-col
                p-4
                items-center
                bg-darkgray
                w-[90px]
                h-fill
                space-y-8"
                >
                    
        <Image
        alt="image"
        src="https://i.ibb.co/jrSj99T/evilneurosama2.webp"
        width={56}
        height={56}
        objectFit="contain"
      />
      <hr className="w-14
                    h-1
                    bg-blackgray
                    border-0 
                    rounded">
      </hr>
      <div className="">
            <Box>
                <div className="
                            flex
                            flex-col
                            gap-y-4
                            px-5
                            py-4 
                        ">                    
                            {routes.map((item) => (
                                <SidebarItem 
                                    key={item.label}
                                    {...item} />
                            ))}
                </div>
            </Box> 
      </div>      
    </div>    
    <main className="h-full flex-1 overflow-y-auto py-0">
        {children}
    </main>
    <Rightside />
    </div>
  );
}

export default Sidebar;