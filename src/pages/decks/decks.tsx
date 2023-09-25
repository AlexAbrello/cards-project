import { useState } from 'react'

import { Body, Button, Cell, Head, HeadCell, Root, Row, TextField } from '@/components/ui'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const [cardName, setCardName] = useState('')
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage: 10,
  })
  const [createCard] = useCreateDeckMutation()

  const createCardClick = () => createCard({ name: cardName })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <TextField label={'Card Name'} onChange={e => setCardName(e.currentTarget.value)} />
      <Button onClick={createCardClick}>Create card</Button>
      <Root>
        <Head>
          <Row>
            <HeadCell>Name</HeadCell>
            <HeadCell>Cards</HeadCell>
            <HeadCell>Last Update</HeadCell>
            <HeadCell>Author by</HeadCell>
          </Row>
        </Head>
        <Body>
          {data?.items.map(deck => {
            return (
              <Row key={deck.id}>
                <Cell>{deck.name}</Cell>
                <Cell>{deck.cardsCount}</Cell>
                <Cell>{new Date(deck.updated).toLocaleString('en-GB')}</Cell>
                <Cell>{deck.author.name}</Cell>
              </Row>
            )
          })}
        </Body>
      </Root>
    </div>
  )
}
