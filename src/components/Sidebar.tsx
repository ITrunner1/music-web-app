"use client"

import { usePathname, useRouter } from 'next/navigation'
import { FaHeart } from "react-icons/fa";
import { 
    HiOutlineArrowSmallLeft,
    HiOutlineArrowSmallRight 
} from "react-icons/hi2";
import { BsMusicNote } from "react-icons/bs"
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsCompassFill } from "react-icons/bs"; 
import { MdFeaturedPlayList } from "react-icons/md"
import { MdLibraryMusic } from "react-icons/md"
import { useMemo } from "react";
import Image from "next/image";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import usePlayer from '@/hooks/usePlayer';
import { Song } from '../../types';
import { twMerge } from 'tailwind-merge';

interface SidebarProps { 
    children: React.ReactNode;
    songs: Song[];
}

const Sidebar = ({ children, songs }: SidebarProps) => {    
    const router = useRouter();            
    const pathname = usePathname();
    const player = usePlayer();

    const routes = useMemo(() => [
        {
            icon: BsMusicNote,
            label: 'Music',
            active: pathname === '/',
            href: '/',            
        },
        {
            icon: FaHeart,
            label: 'Liked',
            active: pathname === '/liked',
            href: '/liked',
        },  
        {
            icon: BsCompassFill,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        },
        {
            icon: MdLibraryMusic,
            label: 'Library',
            active: pathname === '/library',
            href: '/library',
        },        
        {
            icon: MdFeaturedPlayList,
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
        // {
        //     icon: HiOutlineArrowSmallRight,
        //     label: 'Forward',  
        //     href: '/',         
        //     onclick: router.forward()
        // }, 
        {
            icon: HiOutlineArrowSmallLeft,
            label: 'Back',  
            href: '/',
        },
              
    ], [pathname]); 

  return (
    <div 
        className="
            dark
            flex
            h-full
            z-10">
            
    <div className="
                hidden
                md:flex                
                top-0
                z-20                
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
        src="https://i.ibb.co/HT7r6cv/harmonyhub-favicon-color.png"
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
                <div                    
                    className="
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
    <main 
        className={
            twMerge(`
                h-full
                flex-1
                overflow-y-auto
                py-0
                z-10`,
                player.activeId && "h-[calc(100%-80px)]"
        )}>
            {children}               
    </main>    
    </div>
  );    
}

export default Sidebar;