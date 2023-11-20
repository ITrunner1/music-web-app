'use client';

import useLoadImage from "@/hooks/useLoadImage";
import PlayButton from "./PlayButton";
import { Song } from "../../types";

import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react"
import { motion } from "framer-motion";

interface SongItemProps { 
    data: Song;
    onClick: (id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {
    const imagePath = useLoadImage(data);

    return (
        <motion.div 
            whileHover={{ scale: 1.2 }}
            onClick={() => onClick(data.id)}
        >       
        <Card            
            className="
                mt-6                                                       
                cursor-pointer
                w-[240px]
            "            
        >   
            <CardBody className="items-center">                
                    <Image                    
                        alt="Card background"
                        className="rounded-xl object-cover"
                        src={imagePath || '/images/liked.jpg'}
                        width={220}
                    />
                
            </CardBody>        
            <CardFooter className="flex flex-col items-start pt-0 pl-5">                
            <p className="items-center text-white/60 uppercase font-bold">{data.title}</p>
                <p className="text-gray font-medium">By {data.author}</p>                
            </CardFooter>
            <div className="
                    absolute
                    bottom-7
                    right-5
                    z-40
                ">
                <PlayButton />
            </div> 
        </Card>
        </motion.div>
    );
};

export default SongItem;
