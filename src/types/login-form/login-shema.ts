import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Неподходящий e-mail' }),
  password: z.string().min(3, { message: 'Пароль должен быть не менее 3х символов' }),
  rememberMe: z.boolean().default(false),
})

export type FormValues = z.infer<typeof loginSchema>
