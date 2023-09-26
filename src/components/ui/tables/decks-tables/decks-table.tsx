import { FC } from 'react'

import { Body, Cell, Head, HeadCell, Root, Row } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { DecksResponse } from '@/services/decks'

type DecksProps = {
  data?: DecksResponse
}

export const DecksTable: FC<DecksProps> = ({ data }) => {
  return (
    <Root>
      <Head>
        <Row>
          <HeadCell>
            <Typography.Body2>Name</Typography.Body2>
          </HeadCell>
          <HeadCell>
            <Typography.Body2>Cards</Typography.Body2>
          </HeadCell>
          <HeadCell>
            <Typography.Body2>Last Update</Typography.Body2>e
          </HeadCell>
          <HeadCell>
            <Typography.Body2>Author by</Typography.Body2>
          </HeadCell>
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
            </Row>
          )
        })}
      </Body>
    </Root>
  )
}
