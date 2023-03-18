
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import Image from "next/image";
import { AiOutlineSearch, AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import EditProfile from "../components/EditProfile";


export default function Login() {
 
    const [editProfile, setEditProfile] = useState(false);

    const editBtn = () => {
        setEditProfile(!editProfile)
    }
    return (
        <div className="w-full  ">
            <div className="flex gap-2 items-center">
                <img src='/images/profile04.jpg' alt="" className=" w-[50px] h-[50px] rounded-full" />
                <div>
                    <div className=" font-bold text-xl"> Joseph Akanbi </div>
                    <div> 09052308255 </div>
                </div>
            </div>
            <div className=" mt-4 ">
                <div className=" font-bold text-2xl">User Address</div>
                <div className=" text-xl">
                    <div className="">Line 1 mile 2</div>
                    <div>lagos ikeja</div>
                    <div>akanbijoseph@gmail.com</div>
                </div>
            </div>
            <button className=' bg-gray-800 text-white w-full p-3 my-6 rounded-xl' onClick={editBtn}>Edit profile</button>
            {
                editProfile && <div>
                    <EditProfile profile={null} cancel={ editBtn} />
                </div>
            }
        </div>
    )
}