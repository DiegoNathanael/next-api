import { NextResponse } from "next/server";

import prisma from "../../../../../prisma/client";

export async function GET(request, {params}) {
    const id = parseInt(params.id);

    const post = await prisma.post.findUnique({
        where: {
            id,
        },
    });

    if (!post) {
        return NextResponse.json(
            {
                success: true,
                message: "Detail Data Post Not Found!",
                data: null,
            },
            {
                status: 404,
            }
        );
    };

    return NextResponse.json(
        {
            success: true,
            message: "Detail Data Post",
            data: post,
        },
        {
            status: 200,
        }
    );
};