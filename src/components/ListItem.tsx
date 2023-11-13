'use client';

import { useRouter } from "next/navigation";
import { BiPlay } from "react-icons/bi"
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
    const router = useRouter();
    const onClick = () => {
         // Athentication 
        router.push(href);
    }

    return (
        <button 
            onClick = {onClick}
            className="
                    relative
                    group
                    flex
                    items-center
                    rounded-md
                    overflow-hidden
                    gap-x-4
                    bg-mattewhite
                    hover:bg-gray
                    transition
                    pr-4
        ">
            <div className="
                    relative
                    min-h-[64px]
                    min-w-[64px]
            ">
                <Image
                    width={60}
                    className="object-cover"                    
                    src={image}
                    alt="Image"
                />                
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div className="
                    absolute
                    transition
                    opacity-0
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-lightcarrot
                    p-4
                    drop-shadow-md
                    right-5
                    group-hover:opacity-100
                    hover:scale-110
            ">
                <BiPlay className="text-black" />
            </div>
        </button>
    );
};

export default ListItem;