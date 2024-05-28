import { Skeleton } from "@/components/ui/skeleton"

const ProductListPreviewSkeleton = () => {
    return (
        <div className='flex flex-col space-y-5 w-full px-[20px]'>
            {new Array(12).fill(0, 0, 12).map((item, index: number) => {
                return (
                    <div key={index} className='flex flex-col justify-between items-start rounded-md transition-all bg-transparent space-y-[10px] w-full'>
                        <Skeleton className="w-full h-[550px] rounded-md" />
                        <Skeleton className="w-[250px] h-[15px]" />
                        <Skeleton className="w-[250px] h-[15px]" />
                        <Skeleton className="w-[250px] h-[15px]" />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductListPreviewSkeleton