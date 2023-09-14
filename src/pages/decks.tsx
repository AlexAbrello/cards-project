import { useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery()

  if (isLoading) return <div>Loading...</div>

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cards</th>
          <th>Last Update</th>
          <th>Author by</th>
        </tr>
      </thead>
      <tbody>
        {data?.items.map(deck => {
          return (
            <tr key={deck.id}>
              <td>{deck.name}</td>
              <td>{deck.cardsCount}</td>
              <td>{new Date(deck.updated).toLocaleString('en-GB')}</td>
              <td>{deck.author.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
