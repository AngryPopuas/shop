import { ProductSchema } from '@/schemas/product'
import ProductPreview from '../product-preview/ProductPreview'
import { IProduct } from '@/types'

const ProductsListPreview = ({ props }: { props: Array<IProduct> }) => {
  return (
    <div className='flex flex-col w-full space-y-[15px] px-[20px]'>
      {props.map((item,index) => {
        return (
          <ProductPreview key={index} props={item} />
        )
      })}
    </div>
  )
}

export default ProductsListPreview