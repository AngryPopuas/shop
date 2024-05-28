import clientPromise from "@/lib/db"
import { ProductSchema } from "@/schemas/product"
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    try {
        const { title, description, price, imagesUrl } = await req.json()
        const validation = ProductSchema.safeParse({ title, description, price, imagesUrl })

        if (!validation.success) return NextResponse.json({ message: `Wrong data` }, { status: 400 })

        const client = await clientPromise
        const db = client.db('test')

        await db.collection("products").insertOne({ title, description, price, imagesUrl })

        return NextResponse.json({ message: 'Created' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db('test')
        const products = await db
            .collection("products")
            .find({})
            .limit(10)
            .toArray();

        return NextResponse.json({ products, message: 'Success' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}