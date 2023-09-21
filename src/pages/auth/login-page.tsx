import { SignIn } from '@/components/auth'
import { useLoginMutation } from '@/services/auth/auth-api.ts'

export const SignInPage = () => {
  const [signIn] = useLoginMutation()

  return <SignIn onSubmit={signIn} />
}
