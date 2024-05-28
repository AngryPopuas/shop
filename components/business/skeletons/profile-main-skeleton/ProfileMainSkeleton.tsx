import { Skeleton } from "@/components/ui/skeleton"

const ProfileMainSkeleton = () => {
    return (
        <div className="flex flex-col space-y-10">
            <Skeleton className="h-[150px] w-[150px] rounded-full" />
            <Skeleton className="w-[200px] h-[20px] rounded-md" />
            <Skeleton className="w-[200px] h-[20px] rounded-md" />
            <Skeleton className="h-[42px] w-full rounded-md" />
        </div>
    )
}

export default ProfileMainSkeleton