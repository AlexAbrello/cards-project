import s from './decks-table.module.scss'

import { Root } from '@/components/ui'
import { Loader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination/pagination.tsx'
import { SelectComponent } from '@/components/ui/select/select.tsx'
import { TableBody } from '@/components/ui/tables/tableBody.tsx'
import { TableHeader } from '@/components/ui/tables/tableHeader.tsx'
import { useGetDecksQuery } from '@/services/decks'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const DecksTable = () => {
  const tableHeaders = ['Name', 'Cards', 'Last Updated', 'Author by', '']

  const { itemsPerPage, currentPage, searchByName, minCardsCount, maxCardsCount, authorId } =
    useAppSelector(state => state.deckSlice)

  const dispatch = useAppDispatch()

  const setCurrentPage = (currentPage: number) =>
    dispatch(decksSlice.actions.setCurrentPage(currentPage))

  const setItemsPerPage = (itemsPerPage: number) =>
    dispatch(decksSlice.actions.setItemsPerPage(itemsPerPage))

  const { currentData: data } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
    minCardsCount,
    maxCardsCount,
    authorId,
  })

  return (
    <>
      {data ? (
        <>
          <Root>
            <TableHeader headers={tableHeaders} />
            <TableBody data={data.items} />
          </Root>
          <div className={s.pagination}>
            <Pagination
              count={data.pagination.totalPages}
              page={currentPage}
              onChange={setCurrentPage}
            />
            <div>
              <span>Show </span>
              <SelectComponent placeholder={itemsPerPage} onChange={setItemsPerPage}>
                <div>10</div>
                <div>20</div>
                <div>30</div>
              </SelectComponent>
              <span> elements on page</span>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}
