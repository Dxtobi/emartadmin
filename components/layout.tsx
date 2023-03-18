import Navbar from './navbar'
import Footer from './footer'
import {useRouter} from "next/router"
import OverNav from './overnav';
import { useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/react';

export default function Layout(params: { [x: string]: any; children: any }) {

  const { children, ...others } = params
  const nonPaths = ['']
  
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  useEffect(()=>{
    
    const handleRoutChangeStart = (url: string )=> ( url !== router.asPath ) && setLoading(true);
    const handleRoutChangeComplete = (url: string )=> ( url !== router.asPath ) && setLoading(false);

    router.events.on('routeChangeStart', handleRoutChangeStart)
    router.events.on('routeChangeComplete', handleRoutChangeComplete)
    router.events.on('routeChangeError', handleRoutChangeComplete)

  }, [router])
  
  
  const isInPath = nonPaths.includes(router.pathname)
  console.log("layout:", isInPath)
  const session =  useSession()
  return (
    <div className=''>
      <Navbar profile={others} />
      
      {loading && <div className=' flex justify-center items-center w-full h-[100vh] fixed header_div z-50 text-yellow-50 bg-[#000000b1]'><div>Loading</div></div>}
      
      <main className='w-full md:w-[60%] lg:w-[50%] m-auto mt-16 p-5 '>{children}</main>

      {!isInPath && <OverNav session={session.data} />}
      

      <Footer />
      
    </div>
  )
}