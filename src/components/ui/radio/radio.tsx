import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

type RadioProps = {
  variant?: 'primary'
  disabled?: boolean
  label: string
}

export const Radio: FC<RadioProps> = ({ label }) => (
  <RadioGroup.Root className={s.radioGroupRoot}>
    <RadioGroup.Item value={label} className={s.radioGroupItem}>
      <RadioGroup.Indicator className={s.radioGroupIndicator} />
    </RadioGroup.Item>
    <label className={s.label}>{label}</label>
  </RadioGroup.Root>
)
