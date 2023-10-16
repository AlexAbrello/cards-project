import { useParams } from 'react-router-dom'

import { Loader } from '@/components/ui/loader'
import { EmptyDeck } from '@/pages/decks/empty-deck/empty-deck.tsx'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/services/decks'

export const MyDeck = () => {
  const { id } = useParams()

  const { data, isLoading: gettingCardsLoading } = useGetDeckCardsQuery({ id })
  const { data: deckData, isLoading } = useGetDeckByIdQuery({ id })

  if (isLoading || gettingCardsLoading) return <Loader />
  if (data?.items.length === 0) return <EmptyDeck deckName={deckData?.name} deckId={deckData?.id} />

  return <div>My Deck</div>
}
