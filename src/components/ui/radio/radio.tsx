import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

type Option = {
  value: string
}

export type RadioProps = {
  options?: Option[]
  label?: string
  disabled?: boolean
  onChange?: (checked: string) => void
}

export const Radio: FC<RadioProps> = ({ options, disabled, onChange }) => {
  return (
    <RadioGroup.Root className={s.radioGroupRoot} onValueChange={onChange} disabled={disabled}>
      {options?.map(option => (
        <div className={s.wrapper} key={option.value}>
          <RadioGroup.Item value={option.value} className={s.radioGroupItem}>
            <RadioGroup.Indicator
              className={disabled ? s.radioGroupIndicatorDisabled : s.radioGroupIndicator}
            />
          </RadioGroup.Item>
          <label className={disabled ? s.labelDisabled : s.label}>{option.value}</label>
        </div>
      ))}
    </RadioGroup.Root>
  )
}
