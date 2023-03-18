
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Image from "next/image";

interface Value {
    name: string,
    email: string,
    phone: string,
    twitter?: string,
    linkedin?: string,
    facebook?: string,
    instagram?: string,
    bio: string,
    image?: string
}

export default function EditProfile(params: { profile: any; cancel: any}) {

    const { profile, cancel } = params

    const router = useRouter()
    
    const { register, handleSubmit } = useForm({defaultValues:profile});
    
    const onSubmitForm = async (values: Value) => {
        try {
           
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/editprofile",
                data: values,
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await axios(config)

            if (res.status === 200) {
                router.back()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full  ">
            <div className="w-full p-5">
                

                <form onSubmit={handleSubmit(onSubmitForm)}>

                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text'  {...register('Address', { required: true })} placeholder="Address Line" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='tell'  {...register('phone', { required: true })} placeholder="Phone" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text'  {...register('state')} placeholder="State / city" /> 
                    <button className="p-3 bg-gray-900 text-white rounded-md w-full outline-none mb-2" type="submit">UPDATE</button>
                    <button className="p-3 bg-gray-500 text-white rounded-md w-full outline-none mb-2" onClick={cancel}>BACK</button>
                </form>
            </div>
            
        </div>
    )
}