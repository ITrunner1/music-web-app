'use client'

interface MaincontentProps { 
    children: React.ReactNode;
    className?: string;
    setIsLibraryOpen: (isLibraryOpen: boolean) => void,
  }

const Maincontent: React.FC<MaincontentProps> = ({ children }) => {
      return (
        <div className="h-full flex-1 overflow-y-auto py-0">
            {children}                     
        </div>
      );
    };      
export default Maincontent;
