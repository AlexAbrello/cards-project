import { FC } from 'react'

import { DeleteIcon } from '@/assets/icons/delete-icon.tsx'
import { Play } from '@/assets/icons/play.tsx'
import { Body, Button, Cell, Row } from '@/components/ui'
import { EditDeckComponent } from '@/components/ui/modals/edit-deck'
import s from '@/components/ui/tables/decks-tables/decks-table.module.scss'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation } from '@/services/decks'
import { Deck } from '@/services/decks/types.ts'
import { useAppSelector } from '@/services/store.ts'

type DecksProps = {
  data: Deck[]
}

export const TableBody: FC<DecksProps> = ({ data }) => {
  const [deleteDeck] = useDeleteDeckMutation()
  const userId = useAppSelector(state => state.authSlice.userId)

  const handleDeleteDeck = (id: string) => {
    deleteDeck({ id })
      .unwrap()
      .catch(e => {
        alert(e.message)
      })
  }

  return (
    <Body>
      {data.map(deck => {
        return (
          <Row key={deck.id}>
            <Cell>
              <Button to={`/deck/${deck.id}`} variant={'link'} className={s.link}>
                <Typography.Body2>{deck.name}</Typography.Body2>
              </Button>
            </Cell>
            <Cell>
              <Typography.Body2>{deck.cardsCount}</Typography.Body2>
            </Cell>
            <Cell>
              <Typography.Body2>{new Date(deck.updated).toLocaleString('en-GB')}</Typography.Body2>
            </Cell>
            <Cell>
              <Typography.Body2>{deck.author.name}</Typography.Body2>
            </Cell>
            <Cell>
              <Button variant={'secondary'} style={{ marginRight: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play />
                </div>
              </Button>
              {deck.author.id === userId && (
                <>
                  <EditDeckComponent id={deck.id} />
                  <Button variant={'secondary'} onClick={() => handleDeleteDeck(deck.id)}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <DeleteIcon />
                    </div>
                  </Button>
                </>
              )}
            </Cell>
          </Row>
        )
      })}
    </Body>
  )
}
