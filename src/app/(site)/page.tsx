import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {  
  const songs = await getSongs();
  return (
    <main className="dark min-h-screen min-w-max">         
      <Header>                   
        <div className="mb-2 text-mattewhite">
          <h1 className="text-4xl sm:text-5xl lg-6xl font-bold">
            Welcome back
          </h1>        
        </div>        
      </Header>
      <div className="mt-2 mb-7 px-7">        
        <div className="py-0">
          <PageContent songs={songs}/>
        </div>
      </div>             
    </main>
  )
}
