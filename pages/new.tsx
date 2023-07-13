
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Image from "next/image";
import { useState } from "react";
import ImageUploadForm from '../components/ImageUpload'
import { getSession } from "next-auth/react";
import client from "../lib/prismadb";


interface Value {
    product_name:string,
    product_price:string,
    product_description:string,
    seller_contact:string,
    slug:string,
    files:Array<string>,
}

interface thisTags {
    id: string,
    tag_name: string
}
export default function NewProduct(params:{tags: Array<thisTags>}) {

    

    const router = useRouter();
    const { tags } = params
    
    const { register, handleSubmit } = useForm();
   
    const [tag, setTags] = useState(tags)
    const [add_tag, setAdd_Tags] = useState(Array<string>)
    const [images, setImages] = useState(Array<string>)
    const [loading, setLoading] = useState(false)
    
    
    const onSubmitForm = async (values: any) => {
        setLoading(true)
        if (images.length < 1) {
            setLoading(false)
            return
        }
        try {
           
            //console.log(values);
            values.images = images
            values.slug = add_tag
            const config: AxiosRequestConfig = {
                url: "/api/newproduct",
                data: values,
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await axios(config)

            if (res.status === 200) {
                router.reload()
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

  

    function addToTags(tag_name: string): void {
        const t = [...add_tag, tag_name]
       // const tl = tag.filter(obj => obj.tag_name !== tag_name)
        //setTags(tl)
        setAdd_Tags(t)
    }

    function removeTags(tag_name: string): void {
        const t = add_tag.filter(obj => obj !== tag_name)
        setAdd_Tags(t)
    }

    return (
        <div className="w-full  h-full bg-white">
            <div className="w-full p-2">
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-3" type='text'  {...register('product_name', { required: true })} placeholder="Product name" required/>
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-3" type='number'  {...register('product_price', { required: true })} placeholder="price" required/>
                    <textarea className="p-3 bg-gray-100 rounded-md w-full outline-none mb-3 min-h-[200px]"   {...register('product_description')} placeholder="full description of product" required/>
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-3" type='text'  {...register('seller_contact', { required: true })} placeholder="seller contact" required/>
                   {
                    //<input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-4" type='text'  {...register('slug')} placeholder="Foot wears, shorts trousers, others" /> 
                    }
                    <div className="flex flex-wrap my-4 gap-2">
                    {
                        tag.map((e, i) => (
                            <button key={i} onClick={()=>addToTags(e.tag_name)} className="bg-gray-300 p-2  text-black rounded-xl">{e.tag_name}</button>
                        ))
                    }
                    </div>
                    <div className="flex flex-wrap my-4 gap-2">
                    {
                        add_tag.map((e, i) => (
                            <button key={i} onClick={()=>removeTags(e)} className="bg-blue-300 p-2  text-white rounded-xl">{e}</button>
                        ))
                    }
                   </div>
                    {/* <div className="mb-4">
                        
                        <input type='string' value={image} className="p-3 bg-gray-300 rounded-md w-full outline-none mb-2" onChange={(e)=>setImage(e.target.value)} placeholder='image uri' />
                        <button className="p-3 bg-gray-600 text-white rounded-md w-full outline-none mb-2" onClick={onImageChanged}>Add Image</button>
                        <div className=" flex gap-2 items-center flex-wrap">
                            {
                                images.map((e, i) => (
                                    <img src={e} alt={""} width={60} height={60} className=' bg-slate-600 rounded-lg'/>
                                ))
                            }
                        </div>

                        
                      </div> 
                        */}
                    <ImageUploadForm images={images} setFiles={setImages } />
            
                    <button className="p-3 bg-gray-900 text-white rounded-md w-full outline-none mb-2" type="submit" disabled={loading}>{loading?'Loading..':'Add'}</button>
                </form>
            </div>
            
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const prisma = client
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
        tags
      },
    }
  }