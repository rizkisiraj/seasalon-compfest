import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET(req: Request, { params }:{ params: {
    slug: string
}}) {
    const branchId = parseInt(params.slug)

    try {
        const reservations = await db.reservation.findMany({
            where: {
                service: {
                    branchId: branchId
                }
            },
            select: {
                activePhoneNumber: true,
                startTime: true,
                endTime: true,
                id: true,
                user: {
                    select: {
                        name: true,
                        phoneNumber: true
                    }
                }
            }
        })

        if(reservations.length) {
            return NextResponse.json({data: reservations, message: "reservations select successfull"})
        } else {
            return NextResponse.json({message: "No data found", data: null}, {status: 404})
        }
        
    } catch(error: any) {
        return NextResponse.json({message: error}, {status: 500})
    }
}