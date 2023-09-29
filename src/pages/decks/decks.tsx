import { useState } from 'react'

import s from './decks.module.scss'

import { ControlPanel } from '@/components/ui/control-panel'
import { Loader } from '@/components/ui/loader'
import { CreateDeckComponent } from '@/components/ui/modals/create-deck'
import { Pagination } from '@/components/ui/pagination/pagination.tsx'
import { DecksTable } from '@/components/ui/tables/decks-tables'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage: 10,
  })

  const [page, setPage] = useState(1)

  if (isLoading) return <Loader />
  console.log(data)

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography.H2>Decks List</Typography.H2>
        <CreateDeckComponent />
      </div>
      <ControlPanel />
      <DecksTable data={data} />
      <Pagination count={data?.pagination?.totalPages} page={page} onChange={setPage} />
    </div>
  )
}
