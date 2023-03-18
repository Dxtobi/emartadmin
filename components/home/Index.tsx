
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"
//import { data } from "../../lib";
//import PostContainer from "./postContainer";
import { Key } from "react";
import PostContainer from "./PostContainer";
import Link from "next/link";



export default function HomeContainer(params: { data:any }) {

    const { data } = params
    const router = useRouter()

//console.log(data)
    return (

        <div className="w-full">
            <div className="grid grid-cols-2 gap-2">
                <Link href='/products' className="flex flex-col items-center justify-center text-white bg-slate-600 p-3 rounded-sm">
                    <div className=" text-xl">Total Products</div> 
                    <div className="font-bold text-2xl">{data.product }</div>
                </Link>
                <Link href='/users' className="flex flex-col items-center justify-center text-white bg-slate-600 p-3 rounded-sm">
                    <div className=" text-xl">Total Users</div> 
                    <div className="font-bold text-2xl">{data.users}</div>
                </Link>
                <Link  href='/delivered' className="flex flex-col items-center justify-center text-white bg-green-500 p-3 rounded-sm">
                    <div className=" text-xl">Total sales</div> 
                    <div className="font-bold text-2xl">{data.orders}</div>
                </Link>
                <Link href='/pending' className="flex flex-col items-center justify-center text-white bg-yellow-600 p-3 rounded-sm">
                    <div className=" ">Pending Orders</div> 
                    <div className="font-bold text-2xl">{data.pending}</div>
                </Link>
                <Link href='/tags' className="flex flex-col items-center justify-center text-white bg-yellow-600 p-3 rounded-sm">
                    <div className=" ">Total Tags</div> 
                    <div className="font-bold text-2xl">{data.tags}</div>
                </Link>
            </div>

            <div className="flex justify-center gap-2  text-white bg-green-600 p-3 rounded-sm my-4">
                <div>Site traffic</div>
                <div className="">loading</div>
            </div>

        </div>

    )
}