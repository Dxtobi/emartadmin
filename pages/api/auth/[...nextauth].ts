import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [

    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
    ],
    callbacks: {
      session({ session, token, user }) {
        //console.log('user:::', user)

        
        //const data = { id, name, image, email} = user as User
        const this_user = user
        
        
       
        session.user = this_user;
          return Promise.resolve(session)
          
        },
      },
})


