import s from './decks.module.scss'

import { ControlPanel } from '@/components/ui/control-panel'
import { Loader } from '@/components/ui/loader'
import { CreateDeckComponent } from '@/components/ui/modals/create-deck'
import { PaginationPanel } from '@/components/ui/pagination-panel'
import { DecksTable } from '@/components/ui/tables/decks-tables'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/decks'
import { useAppSelector } from '@/services/store.ts'

export const Decks = () => {
  const itemsPerPage = useAppSelector(state => state.deckSlice.itemsPerPage)
  const currentPage = useAppSelector(state => state.deckSlice.currentPage)
  const searchByName = useAppSelector(state => state.deckSlice.searchByName)
  const minCardsCount = useAppSelector(state => state.deckSlice.minCardsCount)
  const maxCardsCount = useAppSelector(state => state.deckSlice.maxCardsCount)
  const authorId = useAppSelector(state => state.deckSlice.authorId)

  const { currentData: data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
    authorId,
  })

  if (isLoading) return <Loader />

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography.H2>Decks List</Typography.H2>
        <CreateDeckComponent />
      </div>
      <ControlPanel minCardsCount={minCardsCount} maxCardsCount={maxCardsCount} />
      {data && (
        <>
          <DecksTable data={data} />
          <div className={s.pagination}>
            <PaginationPanel
              count={data?.pagination.totalPages}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </>
      )}
    </div>
  )
}
