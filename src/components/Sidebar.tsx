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
import { BiSolidVideos } from "react-icons/bi"
import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Rightside from "./Rightside";
import Maincontent from './Maincontent';
import usePlayer from '@/hooks/usePlayer';
import { Song } from '../../types';

interface SidebarProps { 
    children: React.ReactNode;
    songs: Song[];
}

const Sidebar = ({ children, songs }: SidebarProps) => {
    const [isLibraryOpen, setIsLibraryOpen] = useState(false);
    const closeLibrary = () => {
        setIsLibraryOpen(false);        
    };  
    const openLibrary = () => {
        setIsLibraryOpen(true);        
    };      
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
        {
            icon: BiSolidVideos,
            label: 'Videos',
            active: pathname === '/videos',
            href: '/videos',
        },
        {
            icon: HiOutlineArrowSmallRight,
            label: 'Forward',  
            href: '/forward',         
            onclick: router.forward()
        }, 
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
                {isLibraryOpen ? ( <button onClick={closeLibrary}>CLOSE LIBRARY</button> ) :   
                ( <button onClick={openLibrary}>OPEN LIBRARY</button> )}
            </Box> 
      </div>      
    </div>    
    <Maincontent setIsLibraryOpen={setIsLibraryOpen}>
            {children}               
    </Maincontent>  
        <AnimatePresence>
            {isLibraryOpen && (<Rightside songs={songs} />)}         
        </AnimatePresence> 
               
    </div>
  );    
}

export default Sidebar;