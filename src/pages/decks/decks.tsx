import { ControlPanel } from '@/components/ui/control-panel'
import { Loader } from '@/components/ui/loader'
import { CreateDeckComponent } from '@/components/ui/modals/create-deck'
import { DecksTable } from '@/components/ui/tables/decks-tables'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage: 10,
  })

  if (isLoading) return <Loader />

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0 30px 0' }}>
        <Typography.H2>Decks List</Typography.H2>
        <CreateDeckComponent />
      </div>
      <ControlPanel />
      <DecksTable data={data} />
    </div>
  )
}
