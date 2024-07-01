import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

const ServiceSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(255),
    branchId: z.number(),
    duration: z.number().int().min(1, "Tidak boleh kurang dari 1 jam").max(4, "Tidak boleh lebih dari 4 jam")
  })

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, branchId, duration } = ServiceSchema.parse(body)

        const newService = await db.service.create({
            data: {
                name: name,
                branchId: branchId,
                duration: duration,
            }
        })
        return NextResponse.json({service: newService, message: "Service created successfully"})

    } catch(error: any) {
        return NextResponse.json({message: error.issues}, {status: 500})
    }
}