import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next/types';

const prisma = new PrismaClient()

export default async function (req:NextApiRequest, res:NextApiResponse) {
    try {
        console.log(req.body)
        
        const {
            tag_name,
        } = req.body
        
        const session = await getSession({ req });

        if (!session) {
            return res.status(401).json({message:'not login'})
        }

        const r_tag = tag_name.toLowerCase()

        //const sessionUser = session?.user as User;
        const exist = await prisma.tag.count({ where: { tag_name: r_tag } });

       // console.log(exist)

        if (exist != 0) {
            return res.status(301).json({message:'already exist'})
        }

        console.log(r_tag)
        
        const tag = await prisma.tag.create({
            data: {
                tag_name:r_tag,
            }
        });
        return res.status(200).json({message:'saved', data:tag})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:'error',})
    }
}