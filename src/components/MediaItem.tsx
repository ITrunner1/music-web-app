'use client';

import Image from "next/image";
import { motion } from "framer-motion";

import { Song } from "../../types";
import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {
    const player = usePlayer();
    const imageUrl = useLoadImage(data);    
    const handleClick = () => {
        if (onClick) {
            return onClick(data.id)
        }

        return player.setId(data.id)
    }

    return (
        <motion.div 
            whileHover={{ scale: 1.2 }}
            style={{ originX: -0.2 }}
            whileTap={{ scale: 1 }}
            onClick={handleClick}
            className="flex items-center gap-x-3 cursor-pointer w-full p-2 rounded-md">
                <div className="relative rounded-md min-h-[48px] min-w-[48px] oveflow-hidden">
                    <Image     
                        fill                
                        src={imageUrl || "/images/liked.png"}
                        alt="Media Item"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-y-1 oveflow-hidden">             
                    <p className="text-mattewhite truncate">
                        {data.title}
                    </p>
                    <p className="text-gray text-sm truncate">
                        {data.author}
                    </p>
                </div>
        </motion.div>
    );
};

export default MediaItem;