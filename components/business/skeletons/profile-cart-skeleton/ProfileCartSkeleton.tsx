import { Skeleton } from "@/components/ui/skeleton"

const ProfileCartSkeleton = () => {
    return (
        <div className='flex flex-col justify-between space-y-5'>
            <div className="flex flex-col space-y-5 w-full">
                {Array(5).fill(0, 0, 3).map((product, index) => {
                    return (
                        <Skeleton className="p-5 w-full h-[150px]" key={index} />
                    )
                })}
            </div>
            <div className="flex flex-col rounded-md space-y-10 w-full">
                <Skeleton className="rounded-md w-full h-[40px]" />
                <Skeleton className="rounded-md w-full h-[40px]" />
            </div>
        </div>
    )
}

export default ProfileCartSkeleton