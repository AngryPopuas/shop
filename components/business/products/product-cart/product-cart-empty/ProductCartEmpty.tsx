import { Button } from "@/components/ui/button"
import Link from "next/link"


const ProductCartEmpty = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center space-y-10">
            <h2>The cart is empty &#9785;</h2>
            <Link href={'/home'}><Button variant={'yellow'}>Back to home</Button></Link>
        </div>
    )
}

export default ProductCartEmpty