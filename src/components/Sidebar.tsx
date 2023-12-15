"use client"

import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation'
import { FaHeart } from "react-icons/fa";
import { HiOutlineArrowSmallLeft  } from "react-icons/hi2";
import { BsMusicNote, BsCompassFill  } from "react-icons/bs"
import { IoSettings } from "react-icons/io5";
import { MdFeaturedPlayList, MdLibraryMusic } from "react-icons/md"
import { useMemo } from "react";
import { Divider } from '@nextui-org/react';
import { twMerge } from 'tailwind-merge';

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import usePlayer from '@/hooks/usePlayer';

interface SidebarProps { 
    children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {    
    const router = useRouter();            
    const pathname = usePathname();
    const player = usePlayer();

    const routes = useMemo(() => [
        {
            icon: BsMusicNote,
            label: 'Музыка',
            active: pathname === '/',
            href: '/',            
        },
        {
            icon: FaHeart,
            label: 'Понравившиеся',
            active: pathname === '/liked',
            href: '/liked',
        },  
        {
            icon: BsCompassFill,
            label: 'Поиск',
            active: pathname === '/search',
            href: '/search',
        },
        {
            icon: MdLibraryMusic,
            label: 'Библиотека',
            active: pathname === '/library',
            href: '/library',
        },        
        {
            icon: MdFeaturedPlayList,
            label: 'Плейлисты',
            active: pathname === '/playlists',
            href: '/playlists',
        }, 
        {
            icon: IoSettings,
            label: 'Настройки',
            active: pathname === '/settings',
            href: '/settings',
        },        
        {
            icon: HiOutlineArrowSmallLeft,
            label: 'Назад',  
            href: '/',
        },
              
    ], [pathname]); 

  return (
    <div className={
        twMerge(`dark flex h-full z-10`, player.activeId && "h-[calc(100%-80px)]")}>            
        <div className="hidden md:flex z-20 flex-col pt-8 items-center bg-darkgray w-[90px] h-fill space-y-8">                    
            <Image
                alt="image"
                src="https://i.ibb.co/HT7r6cv/harmonyhub-favicon-color.png"
                width={56}
                height={56}               
            />
            <Divider className="h-1 bg-blackgray" />      
            <div className="">
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">                     
                        {routes.map((item) => (                               
                            <SidebarItem                                     
                                key={item.label}
                                {...item} />
                        ))}                            
                    </div>                
                </Box> 
            </div>
        </div>    
        <main className="h-full flex-1 overflow-y-auto py-0 z-10">      
            {children}               
        </main>    
    </div>
  );    
}

export default Sidebar;