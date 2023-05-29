import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Bisnis } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
    const body: Bisnis = await request.json();
    const bisnis = await prisma.bisnis.create({
        data : {
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
    return NextResponse.json(bisnis,{status: 201});
}