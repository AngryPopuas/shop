'use client'
import { Button } from "@/components/ui/button"
import { IProductCart } from "@/types"
import { useState, useEffect } from "react"


const ProductCartOptions = ({ products }: { products: Array<IProductCart> }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        (() => {
            let price = 0
            products.forEach((item) => price += item.price * item.amout)
            setTotalPrice(Math.floor(price))
        })()
    }, [])

    return (
        <div className="flex flex-col h-full rounded-md space-y-10 w-full">
            <h1 className="">Total price: {totalPrice} $</h1>
            <Button variant={'yellow'}>Buy</Button>
        </div>
    )
}

export default ProductCartOptions