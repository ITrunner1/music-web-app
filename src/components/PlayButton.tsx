import { Button } from "@nextui-org/react";
import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
    return (
        <Button isIconOnly className="
            transition            
            rounded-full
            flex
            items-center
            bg-mattewhite
            p-4
            drop-shadow-md
            translate
            translate-y-1/4
            group-hover:opacity-100
            group-hover:translate-y-0
            hover:scale-110
        ">
           <FaPlay className="text-black"/>           
        </Button>
    )
}

export default PlayButton; 