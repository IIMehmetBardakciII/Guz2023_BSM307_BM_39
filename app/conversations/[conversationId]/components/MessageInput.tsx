'use client'

import {  FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { HiPaperAirplane } from "react-icons/hi2";

interface MessageInputProps{
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors
}
const MessageInput:React.FC<MessageInputProps> = ({
    placeholder,id,type,required,register,errors
}) => {
  return (
    <div className="relative w-full">
        <input
         type={type}
         id={id}
         autoComplete={id}
          {...register(id,{required})} 
          placeholder={placeholder}

          className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full 
          focus:outline-none"
          />
          <button type="submit"
          className="rounded-full p-2 bg-green-500 cursor-pointer hover:bg-green-600 transition">
                <HiPaperAirplane size={18} className="text-white" />
          </button>
    </div>
  )
}

export default MessageInput