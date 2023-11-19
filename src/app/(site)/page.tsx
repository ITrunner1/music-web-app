import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {  
  const songs = await getSongs();
  return (
    <main className="
            dark
            text-foreground            
            min-h-screen
            min-w-max
            bg-blakishgray
    ">         
      <Header>                   
        <div className="mb-2">
          <h1 className="
            text-mattewhite
            text-[36px]
            font-semibold
          ">
            Welcome back
          </h1>        
        </div>        
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-mattewhite text-[24px] font-semibold">
            Newest songs
          </h1>
        </div>
        <div className="py-0">
          <PageContent songs={songs}/>
        </div>
      </div>             
    </main>
  )
}