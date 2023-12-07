'use client'

import { useSessionContext } from '@supabase/auth-helpers-react';
import { motion } from 'framer-motion';

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
    <motion.button
      onClick={handleDelete}
      whileHover={{ scale: 1.2 }}                              
      whileTap={{ scale: 1 }}
      className="bg-inherit cursor-pointer hover:text-dangerred"
    >
      Delete
    </motion.button>    
  );
}

export default DeleteButton;