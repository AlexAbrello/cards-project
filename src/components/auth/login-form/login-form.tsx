import { Button } from '@/components/ui'
import { TextField } from '@/components/ui'
import { useForm } from 'react-hook-form'

type FormValues = {
   email: string
   password: string
}

export const LoginForm = () => {

   const {register, handleSubmit} = useForm<FormValues>()

   const onSubmit = (data: FormValues) => {
      console.log(data)
    }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
      <TextField placeholder={'введите e-mail'} {...register('email')} label={'email'} />
      <TextField placeholder={'введите пароль'} {...register('password')} label={'password'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}


