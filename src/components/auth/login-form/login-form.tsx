import { Button, CheckboxComponent, TextField } from '@/components/ui'
import { useController, useForm } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, register, handleSubmit } = useForm<FormValues>()

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label='email' placeholder='Enter e-mail' type='text'/>
      <TextField {...register('password')} label='password' placeholder='Enter password' type='password' />
      <CheckboxComponent onChange={onChange} checked={value} label='Remember Me' />
      <Button type='submit'>Submit</Button>
    </form>
  )
}
