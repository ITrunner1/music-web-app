'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useUser } from "@/hooks/useUser";

const AccountContent = () => {    

    const router = useRouter();
    const { isLoading, user } = useUser();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);  
    
    return (
        <div className="mb-7 px-6">
            <div className="flex flex-col gap-y-4">
                Account page
            </div>
        </div>
    );
};

export default AccountContent;