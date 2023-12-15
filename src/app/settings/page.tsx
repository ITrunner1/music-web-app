import Header from "@/components/Header";

const Settings = () => { 
    return (
        <main className="dark text-foreground min-h-screen min-w-max">             
            <Header> 
                <div className="flex flex-col gap-y-2 mt-4 md:mt-0">                  
                    <h1 className="text-mattewhite text-4xl sm:text-5xl lg-7xl font-bold">
                        Настройки
                    </h1>
                </div>                
            </Header>            
        </main>
    )
}

export default Settings;