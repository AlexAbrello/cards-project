import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, TextField } from '@/components/ui'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx'

const loginSchema = z.object({
  email: z.string().email({ message: 'Неподходящий e-mail' }),
  password: z.string().min(3, { message: 'Пароль должен быть не менее 3х символов' }),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log('errors: ', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email')}
        label="email"
        placeholder="Enter e-mail"
        type="text"
        errorMessage={errors?.email?.message}
      />
      <TextField
        {...register('password')}
        label="password"
        placeholder="Enter password"
        type="password"
        errorMessage={errors?.password?.message}
      />
      <ControlledCheckbox name={'rememberMe'} control={control} label={'Remember Me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
