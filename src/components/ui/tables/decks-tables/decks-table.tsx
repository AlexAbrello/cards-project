import { FC } from 'react'

import { DeleteIcon } from '@/assets/icons/delete-icon.tsx'
import { Play } from '@/assets/icons/play.tsx'
import { Body, Button, Cell, Head, HeadCell, Root, Row } from '@/components/ui'
import { EditDeckComponent } from '@/components/ui/modals/edit-deck'
import { Typography } from '@/components/ui/typography'
import { DecksResponse, useDeleteDeckMutation } from '@/services/decks'
import { useAppSelector } from '@/services/store.ts'

type DecksProps = {
  data?: DecksResponse
}

export const DecksTable: FC<DecksProps> = ({ data }) => {
  const [deleteDeck] = useDeleteDeckMutation()
  const userId = useAppSelector(state => state.authSlice.userId)

  return (
    <Root>
      <Head>
        <Row>
          <HeadCell>
            <Typography.Subtitle2>Name</Typography.Subtitle2>
          </HeadCell>
          <HeadCell>
            <Typography.Subtitle2>Cards</Typography.Subtitle2>
          </HeadCell>
          <HeadCell>
            <Typography.Subtitle2>Last Updated</Typography.Subtitle2>
          </HeadCell>
          <HeadCell>
            <Typography.Subtitle2>Author by</Typography.Subtitle2>
          </HeadCell>
          <HeadCell />
        </Row>
      </Head>
      <Body>
        {data?.items.map(deck => {
          return (
            <Row key={deck.id}>
              <Cell>
                <Typography.Body2>{deck.name}</Typography.Body2>
              </Cell>
              <Cell>
                <Typography.Body2>{deck.cardsCount}</Typography.Body2>
              </Cell>
              <Cell>
                <Typography.Body2>
                  {new Date(deck.updated).toLocaleString('en-GB')}
                </Typography.Body2>
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
                    <Button
                      variant={'secondary'}
                      onClick={() =>
                        deleteDeck({ id: deck.id })
                          .unwrap()
                          .catch(e => {
                            alert(e.message)
                          })
                      }
                    >
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
    </Root>
  )
}
