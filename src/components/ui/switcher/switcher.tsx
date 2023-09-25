import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './switcher.module.scss'

import { Typography } from '@/components/ui/typography'

type TabsProps = {
  variant?: 'primary'
  disabled?: boolean
  label: string
}

export const TabsComponent: FC<TabsProps> = ({ disabled, label }) => (
  <Tabs.Root className={s.tabsRoot}>
    <Tabs.List className={s.tabsList}>
      <Tabs.Trigger className={s.tabsTrigger} value="tab1" disabled={disabled}>
        <Typography.Body2>{label}</Typography.Body2>
      </Tabs.Trigger>
    </Tabs.List>
    {/*<Tabs.Content />*/}
  </Tabs.Root>
)
