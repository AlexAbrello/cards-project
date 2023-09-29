import { FC } from 'react'

import { LogOut } from '@/assets/icons/log-out.tsx'
import { Logo } from '@/assets/icons/logo.tsx'
import { ProfileIcon } from '@/assets/icons/profile.tsx'
import { Avatar, DropdownComponent, Header } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { useLogoutMutation } from '@/services/auth/auth-api.ts'

type HeaderComponentProps = {
  name: string
}

export const HeaderComponent: FC<HeaderComponentProps> = ({ name }) => {
  const [logOut] = useLogoutMutation()

  return (
    <Header>
      <Logo />
      {name && (
        <DropdownComponent trigger={<Avatar name={name} />}>
          <>
            <div style={{ marginRight: '10px' }}>
              <ProfileIcon />
            </div>
            <Typography.Caption>My Profile</Typography.Caption>
          </>
          <>
            <div style={{ marginRight: '10px' }}>
              <LogOut />
            </div>
            <Typography.Caption onClick={logOut}>Log Out</Typography.Caption>
          </>
        </DropdownComponent>
      )}
    </Header>
  )
}
