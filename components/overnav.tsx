
import { AiFillDashboard, AiFillHome, AiFillProfile, AiFillSetting, AiFillStar, AiOutlineSearch, AiOutlineStar, AiOutlineTwitter, AiOutlineUser, AiOutlineVerticalAlignTop } from "react-icons/ai";
import Link from "next/link"
import {useRouter} from "next/router"
import { useEffect } from "react";
import { BiMessageAdd } from "react-icons/bi";

export default function OverNav(params:{session: any}) {


  const {session} = params
    const router = useRouter();
    const { pathname } = router
    
    useEffect(() => {
        
    }, [pathname])

 const others=" lg:flex-col  lg:top-20 lg:left-4 lg:gap-5 bg-[#000000a6] lg:m-4 lg:p-5 lg:w-[10%] lg:rounded-xl"

  const mobile = "flex items-center fixed bottom-0 left-0 right-0 m-auto bg-[#000000f3] justify-around w-full[90%] p-3  header_div rounded-t-xl"
  console.log(session)
  if (session?.user?.role != 'admin') {
      return <div></div>
  }
  return (
    <>
      <footer className={`${mobile} ${others}`}>

      <Link
          className="flex flex-col items-center justify-center gap-2"
          href="/"
              >
          <AiFillDashboard size={pathname == "/" ? 32 : 25} color={ pathname == "/" ? "#25bd5f" : "white"} />
        </Link>

        <Link
          className="flex flex-col items-center justify-center gap-2"
          href="/new"
              >
              <BiMessageAdd size={pathname == "/new" ? 32 : 25} color={ pathname == "/new" ? "#25bd5f" : "white"} />
        </Link>
        
       
        
      </footer>
    </>
  )
}