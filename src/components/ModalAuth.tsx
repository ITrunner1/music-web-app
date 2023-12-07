'use client';

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useAuthModal from "@/hooks/useAuthModal";
import Modal from "./Modal";

const AuthModal = () => {
    const { onClose, isOpen } = useAuthModal();
    const router = useRouter();
    const { session } = useSessionContext();
    const supabaseClient = useSupabaseClient();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    useEffect(() => {
       if (session) {
        router.refresh();  
        onClose();      
       }
    }, [session, router, onClose]);

    return (
        <Modal
            title="Welcome back"
            description="Login to your account"
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth 
              theme="dark"
              providers={["github", "google"]}
              supabaseClient={supabaseClient}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: { 
                      brand: "#1d1e24",
                      brandAccent: "#FF6600",       
                    }
                  }
                }
              }}                  
            />      
        </Modal>
    )
}

export default AuthModal;