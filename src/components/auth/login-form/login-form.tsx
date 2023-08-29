import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, TextField } from '@/components/ui'
import { FormValues, loginSchema } from '@/types/login-form/login-shema.ts'

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
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
