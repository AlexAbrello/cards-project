import { useState } from 'react'

import { Button, TextField } from '@/components/ui'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const [cardName, setCardName] = useState('')
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage: 20,
  })
  const [createCard] = useCreateDeckMutation()

  const createCardClick = () => createCard({ name: cardName })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <TextField label={'Card Name'} onChange={e => setCardName(e.currentTarget.value)} />
      <Button onClick={createCardClick}>Create card</Button>
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
    </div>
  )
}
