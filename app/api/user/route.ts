import bcrypt from "bcrypt"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

const FormSchema = z
  .object({
    name: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    phoneNumber: z.string().min(10, 'Phone number should be at least 10 digits').max(13),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters')
  })

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, name, password, phoneNumber } = FormSchema.parse(body)

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
                phoneNumber: phoneNumber
            }
        })
        return NextResponse.json({user: newUser, message: "User created successfully"})

    } catch(error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}