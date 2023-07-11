
import { AiOutlineSearch, AiOutlineWhatsApp } from "react-icons/ai";

import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import axios, { AxiosRequestConfig } from "axios";
import router from "next/router";
import { useState } from "react";
import client from "../lib/prismadb";


export default function Products(props: {products: any}) {
 
    const [loading, setLoading] = useState(false)

    const { products } = props
    const onSubmitForm = async (id:string) => {
        setLoading(true)
        try {
           
            const config: AxiosRequestConfig = {
                url: `/api/delete/${id}`,
                method: "delete",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await axios(config)

            if (res.status === 200) {
               // setLoading(false)
                router.reload()
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    if (loading) {
        return <div className=" bg-[#17b53c5f] h-[100vh] w-full flex fixed justify-center items-center text-white top-0 left-0"><div>Loading</div></div>
    }
    return (
        <div className="w-full  ">
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2">  
                {
                    products.map((e: any, i: any) => (
                        <div className=" w-full" key={i}>
                            <img src={e.images[0]} alt="" className=" w-full h-[150px] object-contain" />
                            <div>{e.product_name}</div>
                            <div>NGN{e.product_price}</div>
                            <button className=" text-red-600 text-center w-full p-2 border-2 border-red-500" onClick={()=>onSubmitForm(e.id)}>Delete</button>
                        </div>
                        ))
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const prisma = client
    
    const products = await prisma.product.findMany();
    console.log('products', products);
    return {
      props: {
        //session,
        products
      },
    }
  }