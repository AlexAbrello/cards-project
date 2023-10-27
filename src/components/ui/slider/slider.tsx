import { useEffect, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { useDebounce } from '@/hooks/useDebounce.ts'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const SliderComponent = () => {
  const dispatch = useAppDispatch()
  const minCardsCount = useAppSelector(state => state.deckSlice.minCardsCount)
  const maxCardsCount = useAppSelector(state => state.deckSlice.maxCardsCount)
  const [minValue, setMinValue] = useState(minCardsCount)
  const [maxValue, setMaxValue] = useState(maxCardsCount)

  const debouncedSearchName = useDebounce(minValue || maxValue, 700)


  const setMinCardsCount = (value: number) => dispatch(decksSlice.actions.setMinCardsCount(value))
  const setMaxCardsCount = (value: number) => dispatch(decksSlice.actions.setMaxCardsCount(value))
  const setCurrentPage = (value: number) => dispatch(decksSlice.actions.setCurrentPage(value))


  useEffect(() => {
    if (debouncedSearchName) {
      setMinCardsCount(minValue)
      setMaxCardsCount(maxValue)
      setCurrentPage(1)
    }
  }, [debouncedSearchName])

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
