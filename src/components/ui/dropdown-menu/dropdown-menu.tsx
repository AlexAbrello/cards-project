import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

import { Typography } from '@/components/ui/typography'

type DropdownProps = {
  children: ReactNode
  trigger: ReactNode
}

export const DropdownComponent: FC<DropdownProps> = ({ trigger, children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button>{trigger}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.dropdownMenuContent}>
          {Array.isArray(children) &&
            children?.map((el, index) => {
              return (
                <>
                  <DropdownMenu.Item className={s.dropdownMenuItem} key={index}>
                    <Typography.Caption>{el}</Typography.Caption>
                  </DropdownMenu.Item>
                  <DropdownMenuSeparator className={s.dropdownMenuSeparator} />
                </>
              )
            })}
          <DropdownMenu.Arrow className={s.dropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
