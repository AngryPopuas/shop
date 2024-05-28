'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogginAccountFormSchema } from "@/schemas/user";
import { useState } from "react";
import { useRouter } from "next/navigation";
import z from 'zod'
import axios, { AxiosError } from "axios";
import Link from "next/link";


const LogginProfileForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<{ status: boolean, message: string }>({ status: false, message: '' })
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<z.infer<typeof LogginAccountFormSchema>>({
        resolver: zodResolver(LogginAccountFormSchema)
    });

    const onSubmit = async (data: z.infer<typeof LogginAccountFormSchema>) => {
        setIsLoading(true)
        axios.post<{ message: string }>('http://localhost:3000/api/login', { email: data.email, password: data.password })
            .then((res) => { setTimeout(() => { router.push('/home') }, 500) })
            .catch((err: AxiosError<{ message: string }>) => { setIsError({ status: true, message: err.message }) })
            .finally(() => setIsLoading(false))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-10 min-w-[650px] p-5 border border-input rounded-md">
                <div className=" flex flex-row items-end space-x-[5px]"><h2>Sign</h2> <h2 className="text-[#fe6400]">IN</h2></div>
                <Input disabled={isLoading}{...register('email')} placeholder="Email" name="email" type="email" />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                <Input disabled={isLoading}{...register('password')} placeholder="Password" name="password" type="password" />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                {isError.status && <span className="text-red-500 border border-red-500 p-5 w-full">{isError.message}</span>}
                <Button disabled={isLoading} variant={'yellow'}>Sign in</Button>
            </div>
        </form>
    )
}

export default LogginProfileForm
