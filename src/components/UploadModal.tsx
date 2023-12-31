'use client';

import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";
import Modal from "./Modal"
import { useUser } from "@/hooks/useUser";

import uniqid from "uniqid";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();
    const { user } = useUser();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        }
    })

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
       try {
         setIsLoading(true);

         const imageFile = values.image?.[0];
         const songFile = values.song?.[0];
         if (!imageFile || !songFile || !user) {
            console.log('Missing fields');
            return;
         }

         const uniqueID = uniqid();

         // Upload song
         const {
            data: songData,
            error: songError,            
         } = await supabaseClient
             .storage
             .from('songs')
             .upload(`song-${values.title}-${uniqueID}`, songFile, {
                cacheControl: '3600',
                upsert: false
             });

             if (songError) {
                setIsLoading(false);
                return console.log('Failed song upload')
             }
         // Upload Image        
         const {
            data: imageData,
            error: imageError,            
         } = await supabaseClient
             .storage
             .from('images')
             .upload(`image-${values.title}-${uniqueID}`, imageFile, {
                cacheControl: '3600',
                upsert: false
             });

             if (imageError) {
                setIsLoading(false);
                return console.log('Failed image upload')
             }    

         const {
            error: supabaseError
         } = await supabaseClient
            .from('songs')
            .insert({
                user_id: user.id,
                title: values.title,
                author: values.author,
                image_path: imageData.path,
                song_path: songData.path,
            })

            if (supabaseError) {
                setIsLoading(false);
                return console.log(supabaseError.message)
            }

            router.refresh();
            setIsLoading(false);
            console.log("Song created");
            reset();
            uploadModal.onClose();
       } catch (error) {
         console.log(error);
       } finally {
         setIsLoading(false);
       }
    }

    return (
        <Modal
            title="Добавить песню"
            description="Загрузите mp3 файл"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4"
            >
                <Input 
                    id="title"
                    disabled={isLoading}
                    {...register('title', { required: true })}
                    placeholder="Название песни"
                />
                 <Input 
                    id="author"
                    disabled={isLoading}
                    {...register('author', { required: true })}
                    placeholder="Автора"
                />
                <div>
                    <div className="pb-1">
                        Выберете песню
                    </div>
                    <Input 
                        id="song"
                        type="file"
                        disabled={isLoading}
                        accept=".mp3"
                        {...register('song', { required: true })}                        
                    />
                </div>
                <div>
                    <div className="pb-1">
                        Выберете изображение(формат webp, меньше 1MB)
                    </div>
                    <Input 
                        id="image"
                        type="file"
                        disabled={isLoading}
                        accept="image/*"
                        {...register('image', { required: true })}                        
                    />
                </div>
                <Button disabled={isLoading} type="submit">
                    Загрузить
                </Button>
            </form>
        </Modal>
    )
}

export default UploadModal;