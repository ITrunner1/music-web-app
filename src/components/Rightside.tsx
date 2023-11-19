"use client"

import Library from "./Library";
import Box from "./Box";
import { Song } from "../../types";

import { motion } from "framer-motion";

interface RightsideProps {   
  songs: Song;
}

const Rightside: React.FC<RightsideProps> = ({ songs }) => {      
  return (    
    <motion.div 
    initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{
          opacity: 0, x: '100%',
          transition: { duration: 0.25 },
        }}
        transition={{
          type: 'spring',
          duration: 0.5,
        }}
    className="                         
        hidden
        md:flex                
        top-0
        right-0
        z-2                
        flex-col
        pt-4
        p-4
      text-mattewhite        
      bg-darkgray
        w-[400px]
        h-screen
        space-y-8
    ">
      <div className="">      
          <Box className="overflow-y-auto h-full">
            <Library songs={songs}/>                        
          </Box>       
      </div>      
    </motion.div>
  );
}

export default Rightside;