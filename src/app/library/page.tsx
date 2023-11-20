import Header from "@/components/Header";
import Box from "@/components/Box";
import Library from "@/components/Library";
import getSongsByUserId from "@/actions/getSongsByUserId";

export const revalidate = 0;

const LibraryPage = async () => {
    const songs = await getSongsByUserId();
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
                        Library
                    </h1>
                </div>                 
            </Header>
            <div className="mb-7 px-6">
            <div className="flex flex-col gap-y-4">
                <Box className="overflow-y-auto h-full">
                    <Library songs={songs}/>                        
                </Box> 
            </div>
            </div>    
        </main>
    )
}

export default LibraryPage;