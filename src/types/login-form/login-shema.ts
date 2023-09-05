import { z } from 'zod'

export const loginSchema = z
  .object({
    email: z.string({ required_error: 'Введите Email' }).email({ message: 'Неподходящий e-mail' }),
    password: z
      .string({ required_error: 'Введите пароль' })
      .min(3, { message: 'Пароль должен быть не менее 3х символов' })
      .max(30, { message: 'Пароль должен быть не более 30 символов' }),
    confirmPassword: z.string({ required_error: 'Повторите пароль' }),
    rememberMe: z.boolean().default(false),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Введенные пароли не совпадают',
  })

export type FormValues = z.infer<typeof loginSchema>
