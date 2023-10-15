import { FC } from 'react'

import s from './empty-deck.module.scss'

import { CreateCardComponent } from '@/components/ui/modals/create-card/create-card.tsx'
import { Typography } from '@/components/ui/typography'

type EmptyDeckProps = {
  deckName: string
}

export const EmptyDeck: FC<EmptyDeckProps> = ({ deckName }) => {
  return (
    <div className={s.root}>
      <div className={s.title}>
        <Typography.H2>{deckName}</Typography.H2>
      </div>
      <div className={s.body}>
        <Typography.Body1 className={s.text}>
          This deck is empty. Click add new card to fill this deck
        </Typography.Body1>
        <CreateCardComponent />
      </div>
    </div>
  )
}
