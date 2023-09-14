import { useGetDecksQuery } from '@/services/base-api.ts'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery()

  if (isLoading) return <div>Loading...</div>

  return <div>{JSON.stringify(data)}</div>
}
