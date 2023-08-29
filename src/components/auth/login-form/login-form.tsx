import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, CheckboxComponent, TextField } from '@/components/ui'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
  })

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

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

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
      <CheckboxComponent onChange={onChange} checked={value} label="Remember Me" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
