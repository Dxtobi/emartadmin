import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next/types';

const prisma = new PrismaClient()

export default async function (req:NextApiRequest, res:NextApiResponse) {
    try {
        console.log(req.body)
        
        const {
            product_name,
            product_price,
            product_description,
            seller_contact,
            slug,
            images,
          } = req.body
        const session = await getSession({ req });
        if (!session) {
            return res.status(401).json({message:'not login'})
        }

        const sessionUser = session?.user as User;

        const profile = await prisma.product.create({
            data: {
                product_name,
                product_price,
                product_description,
                seller_contact,
                slug: slug,
                images,
                created_at: `${Date.now()}`,
                user: {connect: {id: sessionUser?.id}}
            }
        });
        return res.status(200).json({message:'not login', data:profile})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:'error',})
    }
}