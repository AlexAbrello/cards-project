import { Provider } from 'react-redux'

import { Logo } from '@/assets/icons/logo.tsx'
import { Header } from '@/components/ui'
import { Avatar } from '@/components/ui/avatar'
import { DropdownComponent } from '@/components/ui/dropdown-menu/dropdown-menu.tsx'
import { Router } from '@/router.tsx'
import { store } from '@/services/store.ts'

export function App() {
  return (
    <Provider store={store}>
      <Header>
        <Logo />
        <DropdownComponent trigger={<Avatar name={'Alex'} />}>
          <div>My Profile</div>
          <div>Log Out</div>
        </DropdownComponent>
      </Header>
      <Router />
    </Provider>
  )
}
