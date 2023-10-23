import { FC, useEffect, useState } from 'react'

import { TextField } from '@/components/ui'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

type SearchComponentProps = {
  label: string
}
export const SearchComponent: FC<SearchComponentProps> = ({ label }) => {
  const [searchName, setName] = useState('')
  const [debounceId, setDebounceId] = useState<number | null>(null)
  const dispatch = useAppDispatch()

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

  return (
    <TextField
      onChange={e => setName(e.currentTarget.value)}
      type={'search'}
      placeholder={'input search'}
      style={{ width: '300px' }}
      label={label}
    />
  )
}
