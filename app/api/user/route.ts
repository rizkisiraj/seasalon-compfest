import bcrypt from "bcrypt"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, name, password } = body

        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        })

        if(existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exist" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await db.user.create({
            data: {
                email: email,
                name: name,
                password: hashedPassword,
            }
        })
        return NextResponse.json({user: newUser, message: "User created successfully"})

    } catch(error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}