import s from './decks.module.scss'

import { ControlPanel } from '@/components/ui/control-panel'
import { Loader } from '@/components/ui/loader'
import { CreateDeckComponent } from '@/components/ui/modals/create-deck'
import { Pagination } from '@/components/ui/pagination/pagination.tsx'
import { SelectComponent } from '@/components/ui/select/select.tsx'
import { DecksTable } from '@/components/ui/tables/decks-tables'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/decks'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const Decks = () => {
  const dispatch = useAppDispatch()

  const itemsPerPage = useAppSelector(state => state.deckSlice.itemsPerPage)
  const currentPage = useAppSelector(state => state.deckSlice.currentPage)

  const setCurrentPage = (currentPage: number) =>
    dispatch(decksSlice.actions.setCurrentPage(currentPage))

  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
  })

  if (isLoading) return <Loader />

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography.H2>Decks List</Typography.H2>
        <CreateDeckComponent />
      </div>
      <ControlPanel />
      <DecksTable data={data} />
      <div className={s.pagination}>
        <Pagination
          count={data?.pagination.totalPages}
          page={currentPage}
          onChange={setCurrentPage}
        />
        <SelectComponent placeholder={'something'}>
          <div>10</div>
          <div>20</div>
          <div>30</div>
        </SelectComponent>
      </div>
    </div>
  )
}
