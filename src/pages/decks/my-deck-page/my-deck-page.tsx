import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import s from './my-deck-page.module.scss'

import { TextField } from '@/components/ui'
import { BackButton } from '@/components/ui/back-button'
import { Loader } from '@/components/ui/loader'
import { CreateCardComponent } from '@/components/ui/modals/create-card/create-card.tsx'
import { PaginationPanel } from '@/components/ui/pagination-panel'
import { CardsTable } from '@/components/ui/tables/cards-tables'
import { Typography } from '@/components/ui/typography'
import { EmptyDeck } from '@/pages/decks/empty-deck/empty-deck.tsx'
import { cardsSlice } from '@/services/cards/cards.slice.ts'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/services/decks'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const MyDeck = () => {
  const dispatch = useAppDispatch()
  const [searchName, setName] = useState('')
  const [debounceId, setDebounceId] = useState<number | null>(null)

  const itemsPerPage = useAppSelector(state => state.cardsSlice.itemsPerPage)
  const currentPage = useAppSelector(state => state.cardsSlice.currentPage)
  const searchByName = useAppSelector(state => state.cardsSlice.searchByName)
  const setSearchByName = (name: string) => dispatch(cardsSlice.actions.setSearchByName(name))
  const setCurrentPage = (value: number) => dispatch(cardsSlice.actions.setCurrentPage(value))
  const setItemsPerPage = (value: number) => dispatch(cardsSlice.actions.setItemsPerPage(value))

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
  const { id } = useParams()

  const { currentData: data, isLoading: gettingCardsLoading } = useGetDeckCardsQuery({
    id,
    itemsPerPage,
    currentPage,
    question: searchByName,
  })
  const { data: deckData, isLoading } = useGetDeckByIdQuery({ id })

  if (isLoading || gettingCardsLoading) return <Loader />
  if (data?.items.length === 0) return <EmptyDeck deckName={deckData?.name} deckId={deckData?.id} />

  return (
    <div className={s.wrapper}>
      <BackButton />
      <div className={s.title}>
        <Typography.H2>{deckData?.name}</Typography.H2>
        <CreateCardComponent id={deckData?.id} />
      </div>
      <TextField
        onChange={e => setName(e.currentTarget.value)}
        type={'search'}
        placeholder={'input search'}
        label={'Search by Card Name'}
      />
      <div className={s.table}>
        <CardsTable data={data} />
      </div>
      <div className={s.pagination}>
        <PaginationPanel
          count={data?.pagination.totalPages}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}
