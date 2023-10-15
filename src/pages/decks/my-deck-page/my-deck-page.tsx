import { useParams } from 'react-router-dom'

import { useGetDeckCardsQuery } from '@/services/decks'

export const MyDeck = () => {
  const { id } = useParams()

  const { data } = useGetDeckCardsQuery({ id })

  console.log(data)

  return <div>My Deck</div>
}
