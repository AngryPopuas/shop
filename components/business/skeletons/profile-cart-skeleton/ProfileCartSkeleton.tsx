import { Skeleton } from "@/components/ui/skeleton"

const ProfileCartSkeleton = () => {
    return (
        <div className='flex flex-row justify-between space-x-5'>
            <div className="flex flex-col space-y-5 w-full">
                {Array(5).fill(0, 0, 5).map((product, index) => {
                    return (
                        <Skeleton className="p-5 w-full h-[150px]" key={index} />
                    )
                })}
            </div>
            <div className="flex flex-col rounded-md px-10 space-y-10 w-full max-w-[450px]">
                <Skeleton className="rounded-md w-full h-[15px]" />
                <Skeleton className="rounded-md w-full h-[42px]" />
            </div>
        </div>
    )
}

export default ProfileCartSkeleton