
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Image from "next/image";



export default function Register() {

    //const { profile } = params

    const router = useRouter()
    
    const { register, handleSubmit } = useForm();
    
    const onSubmitForm = async (values:any) => {
        try {
          //  values.image = profile?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/register",
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
                    {
                        //<input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text'  {...register('username', { required: true })} placeholder="username" />
                    }
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text'  {...register('username', { required: true })} placeholder="unique handle" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='email'  {...register('email', { required: true })} placeholder="email" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='password'  {...register('password', { required: true })} placeholder="password" />
                    <button className="p-3 bg-gray-900 text-white rounded-md w-full outline-none mb-2" type="submit">Register</button>
                </form>
            </div>
            
        </div>
    )
}