'use client'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IProfile } from "@/types"
import { AvatarFallback } from "@radix-ui/react-avatar"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"

const ProfileMain = ({ profile }: { profile: IProfile }) => {
    const router = useRouter()
    const handleSignOut = async () => {
        const request = await axios.post('http://localhost:3000/api/signout')
        setTimeout(() => router.replace('/auth/login'), 500)
    }

    return (
        <div className="flex flex-col space-y-10 px-[20px]">
            <Avatar className="w-[100px] h-[100px]"> <AvatarImage src={profile.avatar}/></Avatar>
            <div className="flex flex-row items-center justify-start space-x-[10px]"><h2 className="text-[#fe6400] text-underline">Welcome </h2> <h2>to profile</h2></div>
            <h4 className="text-muted-foreground">Profile name: {profile.name}</h4>
            <Button onClick={handleSignOut} variant={'outline'}>Sign out</Button>
        </div>
    )
}

export default ProfileMain