import { FC } from 'react'

import { LogOut } from '@/assets/icons/log-out.tsx'
import { Logo } from '@/assets/icons/logo.tsx'
import { ProfileIcon } from '@/assets/icons/profile.tsx'
import { Avatar, DropdownComponent, Header } from '@/components/ui'
import { Typography } from '@/components/ui/typography'

type HeaderComponentProps = {
  name: string
}

export const HeaderComponent: FC<HeaderComponentProps> = ({ name }) => {
  return (
    <Header>
      <Logo />
      <DropdownComponent trigger={name && <Avatar name={name} />}>
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
          <Typography.Caption>Log Out</Typography.Caption>
        </>
      </DropdownComponent>
    </Header>
  )
}
