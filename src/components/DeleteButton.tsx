'use client'

import { Tooltip } from '@nextui-org/react';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { motion } from 'framer-motion';
import { MdDelete } from 'react-icons/md';

interface DeleteButtonProps {
  songId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ songId }) => {
  const { supabaseClient } = useSessionContext();

  const handleDelete = async () => {    
    const { error } = await supabaseClient
      .from('songs')
      .delete()                
      .eq('id', songId);   
           
      if (error) {
        console.log("Error Delete")
      }
    }

  return (  
    <Tooltip                                    
        placement="top"
        content="Delete"
        delay={0}
        closeDelay={0}
        motionProps={{
          variants: {
            exit: {
              opacity: 0,
                transition: {
                  duration: 0.1,
                  ease: "easeIn",
                }
            },
            enter: {
              opacity: 1,
                transition: {
                  duration: 0.15,
                  ease: "easeOut",
                }
            },
          },
        }}
        classNames={{
          base: [
            "border-none"
          ],
          content: [
            "bg-inherit border-none text-mattewhite"
          ]
        }}       
    >  
      <motion.button
        onClick={handleDelete}
        whileHover={{ scale: 1.2 }}                              
        whileTap={{ scale: 1 }}
        className=" bg-inherit cursor-pointer hover:text-dangerred"
      >   
        <MdDelete className="w-[26px] h-full mb-2" />
      </motion.button>  
    </Tooltip>  
  );
}

export default DeleteButton;