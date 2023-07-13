import { PrismaClient } from '@prisma/client';

import {

  signIn,

  signOut,

  getSession

} from "next-auth/react";

import { data } from '../lib/fakeData';

import HomeContainer from '../components/home/Index';

import { useState } from 'react';
import client from '../lib/prismadb';


const Home = (params: { session: any; product: any; users: any; orders: any; pending: any;  }) => {

  const {
    session,
    product,
    users,
    orders,
    pending,
  } = params

  //console.log(session)
  const [auth, setAuth] = useState(false);
  const cancel = () => {
    setAuth(!auth)
  }
  return (
    <div className="flex min-h-[70vh] flex-col items-center ">
     
      {session && session?.user?.role == 'admin' && (
        <>
          <HomeContainer data={params} />
        </>
      )}
      {session?.user?.role != 'admin' && (
        <>
          <button onClick={()=>signIn('google')} className=' bg-gray-800 text-white w-full p-3 my-6 rounded-xl '>
            Login 
          </button>
          <div>
            NOT Authorized
          </div>
        </>
      )}

    </div>
  )
}



export async function getServerSideProps(context: any) {
try {
  const prisma = client;
  const session = await getSession(context);

 
  const sessionUser = session?.user as User;
 
  const users = await prisma.user.count();
  const orders = await prisma.order.count({ where: { status: 'delivered' } });
  const product = await prisma.product.count();
  const pending = await prisma.order.count({ where: { status: 'pending' } });
  const tags = await prisma.tag.count();
  //console.log(session, profile);

  return {
    props: {
      product,
      users,
      orders,
      pending,
      session,
      tags
    },
  }
} catch (error) {
 // console.log(error?.message)
}
}
export default Home
