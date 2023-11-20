import getLikedSongs from "@/actions/getLikedSongs";
import LikedSongs from "./components/LikedSongs";
import Header from "@/components/Header";

export const revalidate = 0;

const Liked = async () => {
    const songs = await getLikedSongs();
    return (
        <main 
            className="
                dark
                text-foreground            
                min-h-screen
                min-w-max                      
        ">
            <Header> 
                <div
                    className="
                        flex
                        flex-col
                        gap-y-2
                        mt-4
                        md:mt-0
                    "
                >
                    <h1 className="
                      text-mattewhite
                        text-4xl
                        sm:text-5xl
                        lg-7xl
                        font-bold
                    ">
                        Liked Songs
                    </h1>
                </div>                
            </Header>
            <LikedSongs songs={songs} />
        </main>
    )
}

export default Liked;