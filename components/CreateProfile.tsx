
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"

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

export default function CreateProfile(params: { user: any; }) {

    const { user } = params
    const router = useRouter()
    
    const { register, handleSubmit } = useForm();
    
    const onSubmitForm = async (values: any) => {
        try {
            values.image = user?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/createprofile",
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
            console.log(res)
            router.back()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full  ">
            <div className="w-full p-5">
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <input className="p-3 bg-white rounded-md w-full outline-none mb-2" type='text'  {...register('username', { required: true })} placeholder="username" />
                    <input className="p-3 bg-white rounded-md w-full outline-none mb-2" type='text' {...register('occupation', { required: true })} placeholder="Occupation" />
                    <input className="p-3 bg-white rounded-md w-full outline-none mb-2" type='text' {...register('twitter', )} placeholder="twitter" />
                    <input className="p-3 bg-white rounded-md w-full outline-none mb-2" type='text' {...register('bio')} placeholder="bio or skills" />
                    <input className="p-3 bg-white rounded-md w-full outline-none mb-2" type='text' {...register('slug')} placeholder="your website" />
                    <button className="p-3 bg-gray-900 text-white rounded-md w-full outline-none mb-2" type="submit">Create</button>
                </form>
            </div>
            
        </div>
    )
}