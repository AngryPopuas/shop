

import { NextResponse } from "next/server"
import { NextApiRequest, NextApiResponse } from 'next';
import { CreateAccountFormSchema } from "@/schemas/user"
import { cookies } from 'next/headers'
import clientPromise from "@/lib/db"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
    try {

        cookies().delete('auth')


        return NextResponse.json({ message: 'Успешно' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 })
    }
} 