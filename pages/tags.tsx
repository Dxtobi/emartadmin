
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Image from "next/image";
import { useState } from "react";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import client from "../lib/prismadb";

interface tags {
    id: string,
    tag_name: string
}

export default function NewProduct(params: { tags: Array<tags>; }) {

    const { tags } = params

    const router = useRouter()
    console.log(tags)
    
    const { register, handleSubmit } = useForm();
    const [tag, setTags] = useState(tags)
    const [loading, setLoading] = useState(false)
   
    
    const onSubmitForm = async (values: any) => {
        setLoading(true)
        try {
            const config: AxiosRequestConfig = {
                url: "/api/newtag",
                data: values,
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                }
            };
            const res = await axios(config)
            console.log(res)
            if (res.status === 200) {
                console.log(res.data)
                const all = [res?.data?.data, ...tag]
                setTags(all)
                setLoading(false)
                //router.reload()

            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const deleteTag = async (id: string) => {
        setLoading(true)
        try {
            const config: AxiosRequestConfig = {
                url: `/api/delete/tag/${id}`,
                method: "delete",
                headers: {
                    "Content-Type":"application/json"
                }
            };
            const res = await axios(config)
            console.log(res)
            if (res.status === 200) {
                console.log(res.data)
                const all = tag.filter(obj => obj.id !== id);
                setTags(all)
                setLoading(false)
                //router.reload()

            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

   

    return (
        <div className="w-full  h-full bg-white">
            <div className="w-full p-2">
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-3" type='text'  {...register('tag_name', { required: true })} placeholder="Tag name" />
                    <button className="p-3 bg-gray-900 text-white rounded-md w-full outline-none mb-2" type="submit">Add</button>
                </form>
            </div>
            {
                loading&&<div className=" text-bold text-center">LOADING...</div>
            }
            <div>
                {
                    tag.map((t, i) => (
                        <div key={i} className=" bg-white flex justify-between items-center uppercase p-2">
                            <div>{t.tag_name}</div>
                            <button onClick={()=>deleteTag(t.id)} className=" p-2 bg-red-300 text-red-600 rounded-lg">DELETE</button>
                        </div>
                    ))
                    
                }
            </div>
            
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const prisma = client;
    const session = await getSession(context);
    if (!session) {
      return {
        props: {
          session: null
        }, 
      }
    }
  
   
    const sessionUser = session?.user as User;
    const tags = await prisma.tag.findMany();
    //console.log(session, profile);
  
    return {
      props: {
        
        session,
        tags
      },
    }
  }