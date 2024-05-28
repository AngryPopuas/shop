
import { IProductCart } from '@/types'
import ProductCartList from '../product-cart-list/ProductCartList'
import ProductCartOptions from '../product-cart-options/ProductCartOptions'



const ProductCartWrapper = ({ props }: { props: Array<IProductCart> }) => {

    return (
        <div className='flex flex-col w-full space-y-5'>
            <ProductCartList products={props} />
            <ProductCartOptions products={props} />
        </div>
    )
}

export default ProductCartWrapper