import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, ControlledRadio, ControlledTextField } from '@/components/ui'
import { FormValues, loginSchema } from '@/types/login-form/login-shema.ts'

export const LoginForm = () => {
  const {
    control,
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
      <ControlledTextField
        name={'email'}
        control={control}
        errorMessage={errors?.email?.message}
        type="text"
        label={'email'}
        placeholder={'Enter e-mail'}
      />
      <ControlledTextField
        name={'password'}
        control={control}
        errorMessage={errors?.password?.message}
        type="password"
        label={'password'}
        placeholder={'Enter password'}
      />
      <ControlledCheckbox name={'rememberMe'} control={control} label={'Remember Me'} />
      <ControlledRadio name={'radio'} control={control} label={'Radio button'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
