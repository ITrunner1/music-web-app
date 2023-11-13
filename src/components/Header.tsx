'use client'

import Modal from "./Modal";

import { twMerge } from "tailwind-merge";
import { IoIosHome } from "react-icons/io"
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsCompassFill, BsFillBarChartFill } from "react-icons/bs"; 
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { BiSolidPlaylist } from "react-icons/bi"
import { GoVideo } from "react-icons/go"
import { Button, useDisclosure } from "@nextui-org/react";

interface HeaderProps { 
    children: React.ReactNode;
    className?: string;    
  }

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const handleLogout = () => {
        // Button Logout
    }
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div
            className={twMerge(`                
                p-6
            `, 
                className
            )}
        >
            <div className="
                w-full
                mb-4
                flex
                items-center
                justify-between
            ">                
                <div className="flex md:hidden gap-x-2 items-center">
                    <button 
                        className="
                            rounded-full
                            p-2
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                    <IoIosHome size={30} className="text-mattewhite" />    
                    </button>                    
                    <button 
                        className="
                            rounded-full
                            p-2
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                    <BsCompassFill size={30} className="text-mattewhite" />
                    </button>  
                    <button 
                        className="
                            rounded-full
                            p-2
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                    <BiSolidPlaylist size={30} className="text-mattewhite" />
                    </button> 
                    <button 
                        className="
                            rounded-full
                            p-2
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                    <FaMicrophoneAlt size={30} className="text-mattewhite" />
                    </button> 
                    <button 
                        className="
                            rounded-full
                            p-2
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                    <BsFillBarChartFill size={30} className="text-mattewhite" />
                    </button> 
                    <button 
                        className="
                            rounded-full
                            p-2
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition
                        "
                    >
                    <GoVideo size={30} className="text-mattewhite" />
                    </button>                  
                </div>                    
                <div className="
                        text-mattewhite
                        flex
                        justify-between
                        items-center
                        gap-x-4
                        "> 
                        <>
                            <div>                                
                                <Modal />                                                             
                            </div>
                            <div>
                                <Modal />
                            </div>
                        </>                   
                </div>              
            </div>
            {children}
        </div>
    )
}

export default Header;