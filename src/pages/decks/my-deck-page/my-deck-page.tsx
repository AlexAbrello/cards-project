import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import s from './my-deck-page.module.scss'

import { Body, Cell, Head, HeadCell, Root, Row, TextField } from '@/components/ui'
import { Loader } from '@/components/ui/loader'
import { CreateCardComponent } from '@/components/ui/modals/create-card/create-card.tsx'
import { PaginationPanel } from '@/components/ui/pagination-panel'
import { Typography } from '@/components/ui/typography'
import { EmptyDeck } from '@/pages/decks/empty-deck/empty-deck.tsx'
import { cardsSlice } from '@/services/cards/cards.slice.ts'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/services/decks'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const MyDeck = () => {
  const itemsPerPage = useAppSelector(state => state.cardsSlice.itemsPerPage)
  const currentPage = useAppSelector(state => state.cardsSlice.currentPage)
  const searchByName = useAppSelector(state => state.cardsSlice.searchByName)
  const [searchName, setName] = useState('')
  const [debounceId, setDebounceId] = useState<number | null>(null)
  const dispatch = useAppDispatch()
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

  const { data, isLoading: gettingCardsLoading } = useGetDeckCardsQuery({
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
      <Root>
        <Head>
          <Row>
            <HeadCell>
              <Typography.Subtitle2>Question</Typography.Subtitle2>
            </HeadCell>
            <HeadCell>
              <Typography.Subtitle2>Answer</Typography.Subtitle2>
            </HeadCell>
            <HeadCell>
              <Typography.Subtitle2>Last Updated</Typography.Subtitle2>
            </HeadCell>
            <HeadCell>
              <Typography.Subtitle2>Grade</Typography.Subtitle2>
            </HeadCell>
            <HeadCell />
          </Row>
        </Head>
        <Body>
          {data?.items.map(card => {
            return (
              <Row key={card.id}>
                <Cell>
                  <Typography.Body2>{card.question}</Typography.Body2>
                </Cell>
                <Cell>
                  <Typography.Body2>{card.answer}</Typography.Body2>
                </Cell>
                <Cell>
                  <Typography.Body2>
                    {new Date(card.updated).toLocaleString('en-GB')}
                  </Typography.Body2>
                </Cell>
                <Cell>{card.grade}</Cell>
              </Row>
            )
          })}
        </Body>
      </Root>
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
