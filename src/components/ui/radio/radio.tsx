import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

export type RadioProps = {
  disabled?: boolean
  label: string
}

export const Radio: FC<RadioProps> = ({ label, disabled }) => {
  return (
    <RadioGroup.Root className={s.radioGroupRoot}>
      <RadioGroup.Item value={label} className={s.radioGroupItem} disabled={disabled}>
        <RadioGroup.Indicator
          className={disabled ? s.radioGroupIndicatorDisabled : s.radioGroupIndicator}
        />
      </RadioGroup.Item>
      <label className={disabled ? s.labelDisabled : s.label}>{label}</label>
    </RadioGroup.Root>
  )
}
