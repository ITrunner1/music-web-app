
export interface Song {
    map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode;
    id: string;
    user_id: string;
    author: string;
    title: string;
    song_path: string;  
    image_path: string;  
}

export interface UserDetails { 
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;    
}
