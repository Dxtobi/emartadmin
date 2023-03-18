
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";


export default function Login() {
 
    const onSubmitForm = async (values:any) => {
        
    }

    return (
        <div className="w-full  ">
            <div className="w-[90%] p-2 flex items-center justify-between bg-white rounded-md m-auto border-2 border-gray-700">
                <input className="p-1  w-[80%] outline-none" type='text' placeholder="search" />
                <button className="w-[15%] p-1 rounded-xl bg-slate-600  flex justify-center items-center"><AiOutlineSearch  color="white" size={30}/></button>
            </div>
            
        </div>
    )
}