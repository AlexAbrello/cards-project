import { FC, useEffect, useState } from 'react'

import { TextField } from '@/components/ui'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

type SearchComponentProps = {
  label: string
}
export const SearchComponent: FC<SearchComponentProps> = ({ label }) => {

  const [searchName, setName] = useState('')
  const dispatch = useAppDispatch()

  const setSearchByName = (name: string) => dispatch(decksSlice.actions.setSearchByName(name))
  const setCurrentPage = (value: number) => dispatch(decksSlice.actions.setCurrentPage(value))

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchByName(searchName)
      setCurrentPage(1)
    }, 700) // Задержка в 300 миллисекунд

    return () => {
      clearTimeout(timer)
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