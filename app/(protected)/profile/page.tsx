'use client'
import ProfileMain from "@/components/business/profile/profile-main/ProfileMain"
import ProfileMainSkeleton from "@/components/business/skeletons/profile-main-skeleton/ProfileMainSkeleton"
import { IProfile } from "@/types"
import { getUserAccount } from "@/utils/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const PrfofilePage = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [profile, setUserProfile] = useState<IProfile | null>()
    useEffect(() => {
        (async () => {
            const request = await getUserAccount()
                .then((res) => {
                    if (res) setUserProfile(res)
                    if (!res?._id) router.replace('/auth/login')
                })
                .catch((err) => {
                    router.replace('/auth/login')
                })
                .finally(() => setIsLoading(false))
        })()
    }, [])
    return (
        <>
            {
                isLoading
                    ?
                    <ProfileMainSkeleton />
                    :
                    profile && <ProfileMain profile={profile} />
            }
        </>
    )
}

export default PrfofilePage