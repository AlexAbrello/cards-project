import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './sign-up-form.module.scss'

import { Button, Card, ControlledTextField } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { signUpSchema, SignUpValues } from '@/types/sign-up-form/sign-up-form-shema.ts'

type SignUpProps = {
  onSubmit: () => void
}
export const SignUp: FC<SignUpProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card>
      <Typography.H1>Sign Up</Typography.H1>
      <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <div>
          <ControlledTextField
            name={'email'}
            control={control}
            errorMessage={errors?.email?.message}
            type="text"
            label={'Email'}
            placeholder={'Enter e-mail'}
          />
        </div>
        <div>
          <ControlledTextField
            name={'password'}
            control={control}
            errorMessage={errors?.password?.message}
            type="password"
            label={'Password'}
            placeholder={'Enter password'}
          />
        </div>
        <div>
          <ControlledTextField
            name={'confirmPassword'}
            control={control}
            errorMessage={errors?.confirmPassword?.message}
            type="password"
            label={'Confirm Password'}
            placeholder={'Confirm password'}
          />
        </div>
        <Button type="submit">
          <Typography.Subtitle2>Sign Up</Typography.Subtitle2>
        </Button>
      </form>
      <Typography.Body2>Already have an account?</Typography.Body2>
      <Button as={'a'} href="#" variant={'link'}>
        <Typography.H3>Sign In</Typography.H3>
      </Button>
    </Card>
  )
}
