import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
const BranchSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(255),
    openingHour: z.string().refine((val) => timePattern.test(val), {
        message: "Invalid time format, expected 'HH:MM'",
    }),
    closingHour: z.string().refine((val) => timePattern.test(val), {
        message: "Invalid time format, expected 'HH:MM'",
    })
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, openingHour, closingHour } = BranchSchema.parse(body)

        const newBranch = await db.branch.create({
            data: {
                name: name,
                openingHour: openingHour,
                closingHour: closingHour
            }
        })
        return NextResponse.json({branch: newBranch, message: "Branch created successfully"})

    } catch(error: any) {
        return NextResponse.json({message: error.issues}, {status: 500})
    }
}

export async function GET(req: Request) {
    try {
        const branches = await db.branch.findMany();
        console.log(branches)
        return NextResponse.json({branches: branches, message: "Branch select successfull"})
    } catch(error: any) {
        return NextResponse.json({message: error}, {status: 500})
    }
}