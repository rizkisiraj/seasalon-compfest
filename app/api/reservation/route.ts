import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

const ReservationSchema = z
  .object({
    activePhoneNumber: z.string().min(10, 'Phone number should be at least 10 digits').max(13),
    serviceId: z.string(),
    userId: z.string(),
    startTime: z.date(),
    endTime: z.date(),
  })

export async function POST(req: Request) {
    try {
        const body = await req.json()

        body.startTime = new Date(body.startTime);
        body.endTime = new Date(body.endTime);
        const reservationDetail = ReservationSchema.parse(body)

        const newReservation = await db.reservation.create({
            data: {
                ...reservationDetail
            }
        })
        return NextResponse.json({Reservation: newReservation, message: "Reservation created successfully"})

    } catch(error: any) {
        return NextResponse.json({message: error.issues}, {status: 500})
    }
}