'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAccountFormSchema } from "@/schemas/user";
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react";
import { useRouter } from "next/navigation";
import z from 'zod'
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { Typography } from "antd";


const CreateProfileForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { Title } = Typography;

    const router = useRouter()
    const { toast } = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<z.infer<typeof CreateAccountFormSchema>>({
        resolver: zodResolver(CreateAccountFormSchema)
    });

    const onSubmit = async (data: z.infer<typeof CreateAccountFormSchema>) => {
        setIsLoading(true)
        axios.post<{ message: string }>('http://localhost:3000/api/register', { name: data.name, email: data.email, password: data.password })
            .then((res) => {
                toast({ title: res.data.message, description: `Статус код: ${res.status}` })
                setTimeout(() => { router.push('/home') }, 500)
            })
            .catch((err: AxiosError<{ message: string }>) => {
                toast({ variant: "destructive", title: err.response?.data.message, description: `Статус код: ${err.response?.status}` })
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-5 min-w-[650px] p-5 border border-input rounded-md">
                <div className="flex flex-row w-full justify-start space-x-[5px] "><h2>Create </h2><h2 className="text-[#fe6400]">Account</h2></div>
                <Input disabled={isLoading} {...register('name')} placeholder="Name" name="name" type="text" />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                <Input disabled={isLoading}{...register('email')} placeholder="Email" name="email" type="email" />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                <Input disabled={isLoading}{...register('password')} placeholder="Password" name="password" type="password" />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                <Button variant={'yellow'} disabled={isLoading}>Create</Button>
            </div>
        </form>
    )
}

export default CreateProfileForm
