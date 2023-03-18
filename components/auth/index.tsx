import { signIn } from "next-auth/react"
import { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import {BsGithub} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';

export default function Auth(params: { cancel: any }) {

    const { cancel } = params
    const [toggle, setToggle] = useState(false)
  

    return (
        <div className="w-full z-50 flex flex-col items-center justify-center h-[100vh] absolute top-0 left-0 header_div bg-[#c1c1c18f]">
            
        
            
            <button className="p-3 bg-gray-700 text-white rounded-md w-[90%] outline-none mb-2 mx-auto flex justify-center items-center gap-2 text-lg" onClick={()=>signIn('github')}><BsGithub size={32}/> <div>Github</div></button>
            <button className="p-3 bg-white text-gray-700 rounded-md w-[90%] outline-none mb-2 mx-auto flex justify-center items-center gap-2 text-lg" onClick={() => signIn('google')}><FcGoogle size={32} /> <div>Google</div></button>
            <button className="p-3 bg-red-500 text-white rounded-md w-[90%] outline-none mb-2 mx-auto text-lg" onClick={cancel}>Cancel</button>
        </div>
    )
}