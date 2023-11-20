import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

import { Typography } from '@/components/ui/typography'
import React from 'react'

type DropdownProps = {
  children: ReactNode
  trigger: ReactNode
}

export const DropdownComponent: FC<DropdownProps> = ({ trigger, children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.dropdownMenuContent}>
          {Array.isArray(children) &&
            children?.map((el, index) => {
              return (
                <React.Fragment key={index}>
                  <DropdownMenu.Item className={s.dropdownMenuItem}>
                    <Typography.Caption>{el}</Typography.Caption>
                  </DropdownMenu.Item>
                  <DropdownMenuSeparator className={s.dropdownMenuSeparator} />
                </React.Fragment>
              )
            })}
          <DropdownMenu.Arrow className={s.dropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
