import { useParams } from 'react-router-dom'

import { Card } from '@/components/ui'
import { Loader } from '@/components/ui/loader'
import { Typography } from '@/components/ui/typography'
import { useGetRandomCardsQuery } from '@/services/cards'
import { useGetDeckByIdQuery } from '@/services/decks'

export const Learn = () => {
  const { id } = useParams()

  const { data, isLoading } = useGetRandomCardsQuery({ id })
  const { data: deckData, isLoading: gettingDeckData } = useGetDeckByIdQuery({ id })

  if (isLoading || gettingDeckData) return <Loader />

  return (
    <>
      {data && deckData && (
        <Card>
          <div>
            <Typography.H2>Learn {deckData.name}</Typography.H2>
          </div>
          <div>
            <Typography.Subtitle2>Question:</Typography.Subtitle2>
            <div>
              <Typography.Subtitle2>{data.question}</Typography.Subtitle2>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
