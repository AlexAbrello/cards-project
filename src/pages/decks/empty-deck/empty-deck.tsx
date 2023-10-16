import { FC } from 'react'

import s from './empty-deck.module.scss'

import { BackButton } from '@/components/ui/back-button'
import { CreateCardComponent } from '@/components/ui/modals/create-card/create-card.tsx'
import { Typography } from '@/components/ui/typography'

type EmptyDeckProps = {
  deckName: string | undefined
  deckId: string | undefined
}

export const EmptyDeck: FC<EmptyDeckProps> = ({ deckName, deckId }) => {
  return (
    <div className={s.root}>
      <BackButton />
      <div className={s.title}>
        <Typography.H2>{deckName}</Typography.H2>
      </div>
      <div className={s.body}>
        <Typography.Body1 className={s.text}>
          This deck is empty. Click add new card to fill this deck
        </Typography.Body1>
        <CreateCardComponent id={deckId} />
      </div>
    </div>
  )
}
