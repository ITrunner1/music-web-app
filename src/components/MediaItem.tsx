'use client';

import Image from "next/image";

import { Song } from "../../types";
import useLoadImage from "@/hooks/useLoadImage";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {
    const imageUrl = useLoadImage(data);    
    const handleClick = () => {
        if (onClick) {
            return onClick(data.id)
        }
    }

    return (
        <div
            onClick={handleClick}
            className="
                flex
                items-center
                gap-x-3
                cursor-pointer
                hover:bg-blakishgray
                w-full
                p-2
                rounded-md
            "
        >
            <div
                className="
                    relative
                    rounded-md
                    min-h-[48px]
                    min-w-[48px]
                    oveflow-hidden
                "
            >
                <Image     
                    fill                
                    src={imageUrl || "/images/liked.png"}
                    alt="Media Item"
                    className="object-cover"
                />
            </div>
            <div className="
                flex
                flex-col
                gap-y-1
                oveflow-hidden
            ">
                <p className="text-mattewhite truncate">
                    {data.title}
                </p>
                <p className="text-gray text-sm truncate">
                    {data.author}
                </p>
            </div>
        </div>
    );
};

export default MediaItem;