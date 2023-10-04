import { FC, ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './switcher.module.scss'

import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

type TabsProps = {
  variant?: 'primary'
  disabled?: boolean
  children: ReactNode
}

export const TabsComponent: FC<TabsProps> = ({ disabled, children }) => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.authSlice.userId)
  const authorId = useAppSelector(state => state.deckSlice.authorId)
  const setAuthor = (id: string) => {
    authorId === ''
      ? dispatch(decksSlice.actions.setAuthor(id))
      : dispatch(decksSlice.actions.setAuthor(''))
  }

  return (
    <Tabs.Root
      className={s.tabsRoot}
      defaultValue="All Decks"
      onValueChange={() => setAuthor(userId)}
    >
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
