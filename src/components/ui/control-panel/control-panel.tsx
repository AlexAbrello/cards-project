import { FC, useEffect, useState } from 'react'

import s from './control-panel.module.scss'

import { DeleteIcon } from '@/assets/icons/delete-icon.tsx'
import { Button, SliderComponent, TabsComponent, TextField } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

type ControlPanelProps = {
  name: string
}

export const ControlPanel: FC<ControlPanelProps> = () => {
  const [searchName, setName] = useState('')
  const [debounceId, setDebounceId] = useState<number | null>(null)
  const dispatch = useAppDispatch()
  const setSearchByName = (name: string) => dispatch(decksSlice.actions.setSearchByName(name))

  useEffect(() => {
    if (debounceId) {
      clearTimeout(debounceId)
    }

    if (searchName) {
      setDebounceId(
        setTimeout(() => {
          setSearchByName(searchName)
        }, 700) as unknown as number
      )
    }
  }, [searchName])

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
        <TabsComponent label={'My Cards'} />
        <TabsComponent label={'All Cards'} />
      </div>
      <SliderComponent />
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
