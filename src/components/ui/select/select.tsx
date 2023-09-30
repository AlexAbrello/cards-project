import { FC, ReactNode } from 'react'

import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = {
  children: ReactNode
  placeholder: string
}

export const SelectComponent: FC<SelectProps> = ({ children, placeholder }) => {
  return (
    <Select.Root>
      <Select.Trigger className={s.trigger}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={s.content} position="popper">
          <Select.ScrollUpButton />
          <Select.Viewport className={s.viewPort}>
            {Array.isArray(children) &&
              children?.map((child, index) => {
                return (
                  <Select.Group key={index}>
                    <Select.Item className={s.item}>{child}</Select.Item>
                  </Select.Group>
                )
              })}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
