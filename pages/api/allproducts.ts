import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next/types';


const prisma = new PrismaClient()

export default async function (req:NextApiRequest, res:NextApiResponse) {
    try {
       
        const session = await getSession({ req });

        if (!session) {
            return res.status(401).json({message:'not login'})
        }
        
        const sessionUser = session?.user as User;
        
        const profile = await prisma.product.findMany();
        return res.status(200).json(profile)
    } catch (error) {
       // console.log(error.message)
        return res.status(500).send({message:'error',})
    }
}