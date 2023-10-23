import { useEffect, useState } from 'react'

import s from './control-panel.module.scss'

import { DeleteIcon } from '@/assets/icons/delete-icon.tsx'
import { Button, SliderComponent, TabsComponent, TextField } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const ControlPanel = () => {
  const [searchName, setName] = useState('')
  const [debounceId, setDebounceId] = useState<number | null>(null)
  const dispatch = useAppDispatch()

  const minCardsCount = useAppSelector(state => state.deckSlice.minCardsCount)
  const maxCardsCount = useAppSelector(state => state.deckSlice.maxCardsCount)

  const setSearchByName = (name: string) => dispatch(decksSlice.actions.setSearchByName(name))
  const setCurrentPage = (value: number) => dispatch(decksSlice.actions.setCurrentPage(value))

  useEffect(() => {
    if (debounceId) {
      clearTimeout(debounceId)
    }

    if (searchName) {
      setDebounceId(
        setTimeout(() => {
          setSearchByName(searchName)
          setCurrentPage(1)
        }, 700) as unknown as number
      )
    }
  }, [searchName])

  console.log('control panel')

  return (
    <div className={s.wrapper}>
      <TextField
        onChange={e => setName(e.currentTarget.value)}
        type={'search'}
        placeholder={'input search'}
        style={{ width: '300px' }}
        label={'Search by Deck Name'}
      />
      <div style={{ display: 'flex' }}>
        <TabsComponent>
          <Typography.Body2>My Decks</Typography.Body2>
          <Typography.Body2>All Decks</Typography.Body2>
        </TabsComponent>
      </div>
      <SliderComponent minCardsCount={minCardsCount} maxCardsCount={maxCardsCount} />
      <Button variant={'secondary'}>
        <div style={{ display: 'flex' }}>
          <DeleteIcon />
          <div style={{ marginLeft: '10px' }}>
            <Typography.Subtitle2>Clear Filter</Typography.Subtitle2>
          </div>
        </div>
      </Button>
    </div>
  )
}
