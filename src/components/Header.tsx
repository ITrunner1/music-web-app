'use client'

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import { twMerge } from "tailwind-merge";
import { IoIosHome } from "react-icons/io"
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsCompassFill, BsFillBarChartFill } from "react-icons/bs"; 
import { BiSolidPlaylist } from "react-icons/bi"
import { GoVideo } from "react-icons/go"
import { Avatar, Button } from "@nextui-org/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface HeaderProps { 
    children: React.ReactNode;
    className?: string;    
  }

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const authModal = useAuthModal();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();
    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        router.refresh();

        if (error) {
            console.log(error);
        }
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
                <div></div>                   
                <div className="
                        text-mattewhite
                        flex
                        justify-between
                        items-center
                        gap-x-4
                        ">                            
                        {user ? (                            
                            <div className="flex gap-x-4 items-center">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}              
                                >
                                <Button
                                    onPress={handleLogout}
                                >
                                    Log out
                                </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}              
                                >
                                <Avatar
                                    className="cursor:pointer"
                                    onClick={() => router.push('/account')}
                                    isBordered
                                    radius="sm"
                                    color="warning"
                                    src="https://i.ibb.co/jZh9jBd/cfca9c80-5351-4872-bd91-4413ce15ca22.webp">
                                </Avatar>
                                </motion.div>
                            </div>
                        ) : (      
                        <>
                            <Button
                                onPress={authModal.onOpen}                            
                            >                                
                                Sign Up                                                                 
                            </Button>
                            <Button
                                onPress={authModal.onOpen}  
                            >
                                Log In
                            </Button>
                        </> 
                        )}                  
                </div>              
            </div>
            {children}
        </div>
    )
}

export default Header;