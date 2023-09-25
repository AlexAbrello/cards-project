import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

import { Typography } from '@/components/ui/typography'

type DropdownProps = {
  children?: ReactNode
}

export const DropdownComponent: FC<DropdownProps> = ({ children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>{children}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.dropdownMenuContent}>
          <DropdownMenu.Label></DropdownMenu.Label>
          <DropdownMenu.Item className={s.dropdownMenuItem}>
            <Typography.Caption>My Profile</Typography.Caption>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className={s.dropdownMenuSeparator} />

          <DropdownMenu.Item className={s.dropdownMenuItem}>
            <Typography.Caption>Log Out</Typography.Caption>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className={s.dropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
