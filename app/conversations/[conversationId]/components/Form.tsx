'use client'

import useConversation from "@/app/hooks/useConversation"
import axios from "axios";
import { on } from "events";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from "next-cloudinary";

const Form = () => {
    const {conversationId}=useConversation();

    const {
        register,handleSubmit,setValue,formState:{errors}
    }=useForm<FieldValues>({
        defaultValues:{
            message:''
        }
    });

    const onSubmit:SubmitHandler <FieldValues>=(data)=>{
        setValue('message','',{shouldValidate:true});
        axios.post('/api/messages',{
            ...data,
            conversationId
        })
    };

    const handleUpload=(result:any)=>{
        axios.post('/api/messages',{
            image:result?.info?.secure_url,
            conversationId
        });
    }

  return (
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
        <CldUploadButton options={{maxFiles:1}}
        onUpload={handleUpload}
        uploadPreset="qo5t2ns0"
        >
        <HiPhoto size={30} className='text-green-500' />
        </CldUploadButton>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
        >
            <MessageInput 
            id='message'
            register={register}
            errors={errors}
            required
            placeholder='Write a message'
            />
        </form> 
    </div>
  )
}

export default Form