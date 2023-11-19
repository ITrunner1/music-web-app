'use client'

import { RiPlayListFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai"
import { motion } from "framer-motion";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "../../types";
import MediaItem from "./MediaItem";

interface LibraryProps {   
    songs: Song;
}

const Library: React.FC<LibraryProps> = ({ songs }) => {     
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onClick = () => {        
        if (!user) {            
            return authModal.onOpen();
        }       
        
        return uploadModal.onOpen();
    }   

    return ( 
        <div className="flex flex-col">
            <div className="
                    flex
                    items-center
                    justify                
                    pt-4
                    ">  
                    <div className="
                           text-mattewhite
                            inline-flex
                            items-center
                            gap-x-6
                            pr-36
                            ">
                            <RiPlayListFill size={46}/>                            
                            <p className="                                    
                                    font-medium
                                    text-md
                                    text-xl
                                    ">
                                Your Library
                            </p>                                                    
                    </div> 
                    <motion.div
                        whileHover={{ scale: 1.2 }} 
                    >
                        <AiOutlinePlus
                            size={30}
                            onClick={onClick}
                            className="
                              text-gray
                                cursor-pointer
                              hover:text-mattewhite
                                transition
                            "                      
                        />         
                    </motion.div>         
            </div>
            <hr className="
                    w-full
                    h-1 
                    text-lightcarrot
                    bg-lightcarrot
                    border-1
                    mt-4                                       
                    ">                    
            </hr> 
            <div className="
                flex
                flex-col
                gap-y-2
                mt-4
                px-3
            ">
                    {songs.map((item) => (
                        <MediaItem
                            onClick={() => {}}
                            key={item.id}
                            data={item}
                        />
                    ))} 
            </div>          
        </div>
    );
};

export default Library;