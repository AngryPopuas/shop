'use client'
import { ShoppingCartIcon } from "lucide-react"
import { getUserAccount } from "@/utils/auth"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IProfile } from "@/types"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from 'next/navigation'

const Header = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false)
    const [profileImage, setProfileImage] = useState<string>()
    const pathname = usePathname()
    console.log(pathname)
    useEffect(() => {
        (async () => {
            const request = await getUserAccount()
                .then((res) => {
                    if (res?._id) {
                        setIsAuthorized(true)
                        setProfileImage(res.avatar)
                        console.log(res)
                    }
                })
                .catch(() => {
                    console.log('we are in catch')
                    setIsAuthorized(false)
                })
                .finally(() => setIsLoading(false))
        })()
    }, [pathname])
    return (
        <div className="flex flex-row justify-between items-center p-5">
            <div className="flex flex-row w-full justify-start items-center space-x-[25px]">
                <Link href={'/home'} className=" flex flex-row items-end hover:underline transition-all"><h1>Lab</h1> <h1 className="text-[#fe6400]">Top.</h1></Link>
                <Link href={'/about'} className=" flex flex-row items-end hover:underline transition-all space-x-[5px]"><h1>About </h1> <h1 className="text-[#fe6400]">us</h1></Link>
            </div>
            <div className="flex flex-row items-center space-x-[10px]">
                {isAuthorized
                    ?
                    <>
                        <Link href={'/profile'}> <Button>Profile</Button> </Link>
                        <Link href={'/profile/cart'}><Button variant={'yellow'} className="rounded-full w-[40px] h-[40px] relative">CART</Button></Link>
                    </>
                    :
                    isLoading
                        ?
                        <></>
                        :
                        <>
                            <Link href={'/auth/login'}><Button>Sign in</Button></Link>
                            <Link href={'/auth/register'}><Button variant={'yellow'}>Create account</Button></Link>
                        </>
                }

            </div>
        </div>
    )
}

export default Header