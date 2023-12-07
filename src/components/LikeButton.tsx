'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

interface LikeButtonProps {
    songId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
    songId
}) => {
    const router = useRouter();
    const { supabaseClient } = useSessionContext();

    const authModal = useAuthModal();
    const { user } = useUser();

    const [isLiked, setIsLiked] = useState<boolean>(false);

    useEffect(() => {
        if (!user?.id) {
            return;
        }

        const fetchData = async () => {
            const { data, error } = await supabaseClient
                .from('liked_songs')
                .select('*')
                .eq('user_id', user.id)
                .eq('song_id', songId)
                .single();

            if(!error && data) {
                setIsLiked(true);
            };
        };

        fetchData();
    }, [songId, supabaseClient, user?.id]);

    const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

    const handleLike = async () => {
        if (!user) {
            return authModal.onOpen();
        }

        if (isLiked) {
            const { error } = await supabaseClient
                .from('liked_songs')
                .delete()
                .eq('user_id', user.id)
                .eq('song_id', songId);   
                
            if (error) {
                console.log("Error1")
            } else {
                setIsLiked(false);
            };
        } else { 
            const { error }= await supabaseClient
                .from('liked_songs')
                .insert({
                    song_id: songId,
                    user_id: user.id
                });

            if (error) {
                console.log("Errofdfdfr2")
            } else {
                setIsLiked(true);
                console.log("Liked")
            }
        }

        router.refresh();
    };
    
    return (
        <motion.div 
            onClick={handleLike}
            whileHover={{ scale: 1.2 }}                              
            whileTap={{ scale: 1 }}
            className="bg-inherit cursor-pointer"
        >
            <Icon color={isLiked ? '#FF6600' : '#F2F3F4'} size={25}/>           
        </motion.div>
    );
};

export default LikeButton;