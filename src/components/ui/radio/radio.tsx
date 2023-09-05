import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

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
  const classNames = {
    root: s.radioGroupRoot,
    wrapper: s.wrapper,
    item: s.radioGroupItem,
    indicator: clsx(s.radioGroupIndicator, disabled && s.radioGroupIndicatorDisabled),
    label: clsx(s.label, disabled && s.labelDisabled),
  }

  return (
    <RadioGroup.Root className={classNames.root} onValueChange={onChange} disabled={disabled}>
      {options?.map(option => (
        <div className={classNames.wrapper} key={option.value}>
          <RadioGroup.Item value={option.value} className={classNames.item}>
            <RadioGroup.Indicator className={classNames.indicator} />
          </RadioGroup.Item>
          <label className={classNames.label}>{option.value}</label>
        </div>
      ))}
    </RadioGroup.Root>
  )
}
