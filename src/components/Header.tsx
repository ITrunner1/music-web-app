'use client'
import { twMerge } from "tailwind-merge";
import Button from "./Button";
  import { IoIosHome } from "react-icons/io"
  import { FaMicrophoneAlt } from "react-icons/fa";
  import { BsCompassFill, BsFillBarChartFill } from "react-icons/bs"; 
  import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
  import { BiSolidPlaylist } from "react-icons/bi"
  import { GoVideo } from "react-icons/go"

interface HeaderProps { 
    children: React.ReactNode;
    className?: string;
  }

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const handleLogout = () => {
        // Button Logout
    }
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
                        flex
                        w-[1160px]
                        bg-[#1a1a1a]
                        border-none
                        rounded-full
                        overflow-hidden
                        border-2                        
                        p-3
                        pl-6
                        ">
                    <input
                        type="text"       
                        className="
                            bg-[#1a1a1a]
                              text-white
                              border-none
                              lg:w-full
                              focus:ring-0
                              outline-none
                              placeholder-[#fafafa]
                              text-xs"
                        placeholder="Search something..."
                    />
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
                                <Button
                                    onClick={() => {}}
                                    className="                                    
                                        bg-transparent
                                        border-none
                                        font-medium
                                        text-mattewhite
                                    "
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={() => {}}
                                    className="
                                        bg-mattewhite
                                        border-none
                                        px-6
                                        py-2
                                        text-black
                                    "
                                >
                                    Log in
                                </Button>
                            </div>
                        </>                   
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header;