import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Bisnis } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
    const body: Bisnis = await request.json();
    const product = await prisma.bisnis.update({
        where:{
            id: Number(params.id)
        },
        data:{
            nameUMKM: body.nameUMKM,
            owner: body.owner,
            description: body.description,
            address: body.address,
            category: body.category,
            openAt: body.openAt,
            closeAt: body.closeAt,
            destinasiId: body.destinasiId
        }
    });
    return NextResponse.json(product, {status: 200});
}

export const DELETE = async (request: Request, {params}: {params : {id : string}}) => {
    const bisnis = await prisma.bisnis.delete({
        where : {
            id: Number(params.id)
        }
    });
    return NextResponse.json(bisnis, {status: 200});
}