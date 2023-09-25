import { Provider } from 'react-redux'

import { LogOut } from '@/assets/icons/log-out.tsx'
import { Logo } from '@/assets/icons/logo.tsx'
import { ProfileIcon } from '@/assets/icons/profile.tsx'
import { Header } from '@/components/ui'
import { Avatar } from '@/components/ui/avatar'
import { DropdownComponent } from '@/components/ui/dropdown-menu/dropdown-menu.tsx'
import { Typography } from '@/components/ui/typography'
import { Router } from '@/router.tsx'
import { store } from '@/services/store.ts'

export function App() {
  return (
    <Provider store={store}>
      <Header>
        <Logo />
        <DropdownComponent trigger={<Avatar name={'Alex'} />}>
          <>
            <ProfileIcon />
            <Typography.Caption>My Profile</Typography.Caption>
          </>
          <>
            <LogOut />
            <Typography.Caption>Log Out</Typography.Caption>
          </>
        </DropdownComponent>
      </Header>
      <Router />
    </Provider>
  )
}
