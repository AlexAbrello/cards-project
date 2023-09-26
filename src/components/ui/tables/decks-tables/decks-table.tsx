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
