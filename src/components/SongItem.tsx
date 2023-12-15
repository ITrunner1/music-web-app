'use client';

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "../../types";
import Image from "next/image";

import { Card, CardBody, CardFooter, Button, Tooltip } from "@nextui-org/react"
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
        <Tooltip                                    
            placement="top-start"
            content="Click to listen"
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
                    "bg-darkgray border-none text-mattewhite"
                ]
            }}       
        >  
            <motion.div 
                whileHover={{ scale: 1.2 }}            
                whileTap={{ scale: 1 }}
                onClick={() => onClick(data.id)}
                className="outline-none"
            >
                <Card className="mt-6 cursor-pointer w-[240px] bg-darkgray"> 
                    <CardBody className="items-center">                
                        <Image             
                            alt="Card background"
                            className="rounded-xl object-cover h-[220px]"
                            src={imagePath || '/images/liked.jpg'}
                            width={210}
                            height={90}
                            sizes="100vw"                                                           
                            loading="lazy"                                                                                                      
                        />                
                    </CardBody>        
                    <CardFooter className="flex flex-col items-start pt-0 pl-5">                
                        <p className="items-center text-white/60 uppercase font-bold">
                            {data.title}
                        </p>
                        <p className="text-gray font-medium">
                            Написал {data.author}
                        </p>                
                    </CardFooter>             
                </Card>
            </motion.div>
        </Tooltip>
    );
};

export default SongItem;
