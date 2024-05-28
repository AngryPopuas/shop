import { ProductSchema } from '@/schemas/product'
import { IProduct, IProductCart } from '@/types'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const ProductCartItem = ({ props }: { props: IProductCart }) => {
    const router = useRouter()
    const handleRedirectProduct = () => {
        router.push(`/${props._id}`)
    }
    return (
        <div onClick={handleRedirectProduct} className='flex flex-row justify-between items-center rounded-md transition-all p-5 space-x-5 cursor-pointer   hover:bg-input bg-transparent w-full'>
            <div className='w-[100px] h-[100px] relative'><Image src={props.imagesUrl[0]} alt='Продукт' className='rounded-md object-cover' fill={true} /></div>
            <span className='text-muted-foreground'>{props.title.length < 16 ? props.title : props.title.slice(0, 16) + '...'}</span>
            <span>{props.description.length < 16 ? props.description : props.description.slice(0, 16) + '...'}</span>
            <span>{props.price * props.amout}$</span>
            <span>{props.amout}</span>
        </div>
    )
}

export default ProductCartItem