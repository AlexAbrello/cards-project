import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './switcher.module.scss'

type TabsProps = {
  variant?: 'primary'
  disabled?: boolean
  label: string
}

export const TabsComponent: FC<TabsProps> = ({ disabled, label }) => (
  <Tabs.Root className={s.tabsRoot}>
    <Tabs.List className={s.tabsList}>
      <Tabs.Trigger className={s.tabsTrigger} value="tab1" disabled={disabled}>
        {label}
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content />
  </Tabs.Root>
)
