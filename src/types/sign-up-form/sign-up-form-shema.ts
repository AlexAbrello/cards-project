import { z } from 'zod'

export const signUpSchema = z.object({
  email: z.string({ required_error: 'Введите Email' }).email({ message: 'Неподходящий e-mail' }),
  password: z
    .string({ required_error: 'Введите пароль' })
    .min(3, { message: 'Пароль должен быть не менее 3х символов' })
    .max(30, { message: 'Пароль должен быть не более 30 символов' }),
})

export type SignUpValues = z.infer<typeof signUpSchema>
