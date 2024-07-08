import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET(req: Request, { params }:{ params: {
    slug: string
}}) {
    const branchId = parseInt(params.slug)

    try {
        const branch = await db.branch.findUnique({
            where: {
                id: branchId
            },
            include: {
                services: {
                    select: {
                        id: true,
                        duration: true,
                        name: true,
                    },
                }
            }
        })

        if(branch) {
            return NextResponse.json({data: branch, message: "Branch select successfull"})
        } else {
            return NextResponse.json({message: "No data found"}, {status: 404})
        }
        
    } catch(error: any) {
        return NextResponse.json({message: error}, {status: 500})
    }
}