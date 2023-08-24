import { FC, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {}

export const SliderComponent: FC<SliderProps> = () => {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setManValue] = useState(100)

  const changeValueHandler = (value: number[]) => {
    setMinValue(value[0])
    setManValue(value[1])
  }

  return (
    <div className={s.wrapper}>
      <div className={s.valueWrapper}>
        <span className={s.value}>{minValue}</span>
      </div>
      <Slider.Root
        className={s.sliderRoot}
        defaultValue={[minValue, maxValue]}
        max={100}
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
