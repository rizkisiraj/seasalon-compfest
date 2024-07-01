import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

const BranchSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(255),
    activePhoneNumber: z.string().min(10, 'Phone number should be at least 10 digits').max(13),
    serviceId: z.string(),
    userId: z.string(),
    reservationDate: z.date(),
    startTime: z.date(),
    endTime: z.date(),
  })

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, activePhoneNumber, serviceId, userId, reservationDate, startTime, endTime } = BranchSchema.parse(body)

        const newBranch = await db.reservation.create({
            data: {
                name: name,
                activePhoneNumber: activePhoneNumber,
                closingHour: closingHour
            }
        })
        return NextResponse.json({branch: newBranch, message: "Branch created successfully"})

    } catch(error: any) {
        return NextResponse.json({message: error.issues}, {status: 500})
    }
}