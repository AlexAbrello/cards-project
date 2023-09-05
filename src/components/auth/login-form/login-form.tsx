import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, Card, ControlledCheckbox, ControlledTextField } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
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
    <Card>
      <Typography.H1>Sign In</Typography.H1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledTextField
          name={'email'}
          control={control}
          errorMessage={errors?.email?.message}
          type="text"
          label={'Email'}
          placeholder={'Enter e-mail'}
        />
        <ControlledTextField
          name={'password'}
          control={control}
          errorMessage={errors?.password?.message}
          type="password"
          label={'Password'}
          placeholder={'Enter password'}
        />
        <ControlledCheckbox name={'rememberMe'} control={control} label={'Remember Me'} />
        <Button type="submit" fullWidth={true}>
          <Typography.Subtitle2>Submit</Typography.Subtitle2>
        </Button>
      </form>
    </Card>
  )
}
