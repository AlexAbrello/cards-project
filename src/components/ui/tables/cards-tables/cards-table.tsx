import { FC } from 'react'

import { Body, Cell, Head, HeadCell, Root, Row } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { DeckCardsResponse } from '@/services/decks/types.ts'

type CardsTableProps = {
  data?: DeckCardsResponse
}

export const CardsTable: FC<CardsTableProps> = ({ data }) => {
  return (
    <Root>
      <Head>
        <Row>
          <HeadCell>
            <Typography.Subtitle2>Question</Typography.Subtitle2>
          </HeadCell>
          <HeadCell>
            <Typography.Subtitle2>Answer</Typography.Subtitle2>
          </HeadCell>
          <HeadCell>
            <Typography.Subtitle2>Last Updated</Typography.Subtitle2>
          </HeadCell>
          <HeadCell>
            <Typography.Subtitle2>Grade</Typography.Subtitle2>
          </HeadCell>
          <HeadCell />
        </Row>
      </Head>
      <Body>
        {data?.items.map(card => {
          return (
            <Row key={card.id}>
              <Cell>
                <Typography.Body2>{card.question}</Typography.Body2>
              </Cell>
              <Cell>
                <Typography.Body2>{card.answer}</Typography.Body2>
              </Cell>
              <Cell>
                <Typography.Body2>
                  {new Date(card.updated).toLocaleString('en-GB')}
                </Typography.Body2>
              </Cell>
              <Cell>{card.grade}</Cell>
            </Row>
          )
        })}
      </Body>
    </Root>
  )
}
