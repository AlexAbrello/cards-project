import { FC } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination.tsx'
import { SelectComponent } from '@/components/ui/select/select.tsx'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

type PaginationProps = {
  count: number
  currentPage: number
  itemsPerPage: number
}

export const PaginationPanel: FC<PaginationProps> = ({ count, currentPage, itemsPerPage }) => {
  const dispatch = useAppDispatch()

  const setCurrentPage = (currentPage: number) =>
    dispatch(decksSlice.actions.setCurrentPage(currentPage))

  const setItemsPerPage = (itemsPerPage: number) =>
    dispatch(decksSlice.actions.setItemsPerPage(itemsPerPage))

  return (
    <>
      <Pagination count={count} page={currentPage} onChange={setCurrentPage} />
      <div>
        <span>Show </span>
        <SelectComponent placeholder={itemsPerPage} onChange={setItemsPerPage}>
          <div>10</div>
          <div>20</div>
          <div>30</div>
        </SelectComponent>
        <span> decks on page</span>
      </div>
    </>
  )
}
