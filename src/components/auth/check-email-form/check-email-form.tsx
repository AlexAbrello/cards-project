import EmailImage from '@/assets/icons/email-image.tsx'
import { Button, Card } from '@/components/ui'
import { Typography } from '@/components/ui/typography'

export const CheckEmail = () => {
  return (
    <Card>
      <Typography.H1>Check Email</Typography.H1>
      <EmailImage />
      <Typography.Body2 style={{ color: '#4C4C4C', textAlign: 'center' }}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography.Body2>
      <Button as={'a'} href="#" fullWidth={true}>
        <Typography.Subtitle2>Back to Sign In</Typography.Subtitle2>
      </Button>
    </Card>
  )
}
