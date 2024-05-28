'use client'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IProfile } from "@/types"
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
        <div className="flex flex-col space-y-10">
            <Avatar className="h-[150px] w-[150px]"> <AvatarImage src={profile.avatar} /> </Avatar>
            <h4>Имя профиля: {profile.name}</h4>
            <span>Статус аккаунта: {profile.isActivated ? 'Подтвержден' : 'Не подтвержден'}</span>
            <Button onClick={handleSignOut} variant={'outline'}>Выйти из аккаунта</Button>
        </div>
    )
}

export default ProfileMain