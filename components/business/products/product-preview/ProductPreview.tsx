
import { ProductSchema } from '@/schemas/product'
import { IProduct } from '@/types'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import z from 'zod'


const ProductPreview = ({ props }: { props: IProduct }) => {
    const router = useRouter()
    const handleRedirectProduct = () => {
        router.push(`${props._id}`)
    }
    return (
        <div onClick={handleRedirectProduct} className='flex flex-col justify-between border border-input w-full items-start rounded-md transition-all hover:bg-input bg-transparent space-y-[10px] cursor-pointer'>
            <div className='w-full h-[550px] relative'><Image src={props.imagesUrl[0]} alt='Продукт' className='rounded-md object-cover' fill={true} /></div>
            <h4 className='p-[10px]'>{props.title.length < 32 ? props.title : props.title.slice(0,32) + '...' }</h4>
            <p className='p-[10px]'>{props.description.length < 64 ? props.description : props.description.slice(0,64) + '...' }</p>
            <h3 className='p-[10px]'>{props.price}$</h3>
        </div>
    )
}

export default ProductPreview