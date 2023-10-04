import { FC, ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './switcher.module.scss'

type TabsProps = {
  variant?: 'primary'
  disabled?: boolean
  children: ReactNode
}

export const TabsComponent: FC<TabsProps> = ({ disabled, children }) => {
  return (
    <Tabs.Root className={s.tabsRoot} defaultValue="All Decks">
      <Tabs.List className={s.tabsList}>
        {Array.isArray(children) &&
          children.map((child, index) => {
            return (
              <Tabs.Trigger
                key={index}
                className={s.tabsTrigger}
                value={child.props.children}
                disabled={disabled}
              >
                {child}
              </Tabs.Trigger>
            )
          })}
      </Tabs.List>
      {/*<Tabs.Content />*/}
    </Tabs.Root>
  )
}
