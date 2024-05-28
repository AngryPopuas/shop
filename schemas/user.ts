import z from 'zod'


export const LogginAccountFormSchema = z.object({
    email: z.string().email('Wrong email'),
    password: z.string()
        .min(8, 'Password should be longer than 8 symbols')
        .max(32, 'Password cannot be longer than 32 symnols')
})


export const CreateAccountFormSchema = z.object({
    name: z.string()
        .min(3, 'Name should be longer than 3 symbols')
        .max(16, 'Name cannot be longer than 16 symbols'),
    email: z.string().email('Wrong email'),
    password: z.string()
        .min(8, 'Password should be longer than 8 symbols')
        .max(32, 'Password cannot be longer than 32 symbols')
});