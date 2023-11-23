'use client'

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

import { FaMicrophoneAlt, FaHeart } from "react-icons/fa";
import { BsCompassFill, BsMusicNote } from "react-icons/bs"; 
import { MdLibraryMusic, MdFeaturedPlayList } from "react-icons/md";
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
    const player = usePlayer();
    const { user } = useUser();
    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        player.reset();
        router.refresh();

        if (error) {
            console.log(error);
        }
    }    

    return (
        <div className={twMerge(`p-6`, className)}>        
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="z-30 flex md:hidden gap-x-2 pr-0">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Button isIconOnly className="rounded-full bg-black w-12 h-12">
                            <BsMusicNote size={30} className="text-mattewhite" />    
                        </Button>
                    </motion.div> 
                    <motion.div whileHover={{ scale: 1.2 }}>                   
                        <Button isIconOnly className="rounded-full bg-black w-12 h-12">                        
                            <FaHeart size={30} className="text-mattewhite" />
                        </Button>
                    </motion.div>  
                    <motion.div whileHover={{ scale: 1.2 }}> 
                        <Button isIconOnly className="rounded-full bg-black w-12 h-12">                    
                            <BsCompassFill size={30} className="text-mattewhite" />
                        </Button> 
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Button isIconOnly className="rounded-full bg-black w-12 h-12">                                        
                            <MdLibraryMusic size={30} className="text-mattewhite" />
                        </Button> 
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Button isIconOnly className="rounded-full bg-black w-12 h-12">
                            <MdFeaturedPlayList size={30} className="text-mattewhite" />
                        </Button> 
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Button isIconOnly className="rounded-full bg-black w-12 h-12">                        
                            <FaMicrophoneAlt size={30} className="text-mattewhite" />
                        </Button>  
                    </motion.div>
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
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <Button
                                        onPress={handleLogout}
                                    >
                                        Log out
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.2 }}>
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
                        <div className="flex flex-1 gap-x-2">
                            <Button onPress={authModal.onOpen}>                                
                                Sign Up                                                                 
                            </Button>
                            <Button onPress={authModal.onOpen}>
                                Log In
                            </Button>
                        </div> 
                        )}                  
                </div>              
            </div>
            {children}
        </div>
    )
}

export default Header;