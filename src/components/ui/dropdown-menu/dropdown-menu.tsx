import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

import { Typography } from '@/components/ui/typography'

type DropdownProps = {
  children: ReactNode
  trigger: ReactNode
}

export const DropdownComponent: FC<DropdownProps> = ({ trigger, children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>{trigger}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.dropdownMenuContent}>
          <DropdownMenu.Label></DropdownMenu.Label>
          {Array.isArray(children) &&
            children?.map(el => {
              return (
                <>
                  <DropdownMenu.Item className={s.dropdownMenuItem} asChild>
                    <Typography.Caption>{el}</Typography.Caption>
                  </DropdownMenu.Item>
                </>
              )
            })}

          <DropdownMenu.Arrow className={s.dropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
