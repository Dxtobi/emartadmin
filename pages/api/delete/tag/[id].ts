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
       
        const { id } = req.query
        console.log('deleting:::', id)
        const product = await prisma.tag.delete({
            where: {
                id:id as string
              }
        });

       // console.log(product)
    
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:'error',})
    }
}