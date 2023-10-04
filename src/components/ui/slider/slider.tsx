import { FC, useEffect, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

type SliderProps = {
  minCardsCount: number
  maxCardsCount: number
}

export const SliderComponent: FC<SliderProps> = ({ minCardsCount, maxCardsCount }) => {
  const dispatch = useAppDispatch()
  const [debounceId, setDebounceId] = useState<number | null>(null)
  const [minValue, setMinValue] = useState(minCardsCount)
  const [maxValue, setMaxValue] = useState(maxCardsCount)

  const setMinCardsCount = (value: number) => dispatch(decksSlice.actions.setMinCardsCount(value))
  const setMaxCardsCount = (value: number) => dispatch(decksSlice.actions.setMaxCardsCount(value))

  useEffect(() => {
    if (debounceId) {
      clearTimeout(debounceId)
    }

    setDebounceId(
      setTimeout(() => {
        setMinCardsCount(minValue)
        setMaxCardsCount(maxValue)
      }, 700) as unknown as number
    )
  }, [minValue, maxValue])

  const changeValueHandler = (value: number[]) => {
    setMinValue(value[0])
    setMaxValue(value[1])
  }

  return (
    <div className={s.wrapper}>
      <div className={s.valueWrapper}>
        <span className={s.value}>{minValue}</span>
      </div>
      <Slider.Root
        className={s.sliderRoot}
        defaultValue={[minValue, maxValue]}
        max={52}
        step={1}
        onValueChange={changeValueHandler}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.sliderThumb} />
        <Slider.Thumb className={s.sliderThumb} />
      </Slider.Root>
      <div className={s.valueWrapper}>
        <span className={s.value}>{maxValue}</span>
      </div>
    </div>
  )
}
