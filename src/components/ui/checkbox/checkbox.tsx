import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import style from './checkbox.module.css'

type CheckboxProps = {
  variant?: 'primary'
  label: string
  callBack?: (checked: boolean) => void
  disabled?: boolean
}

export const CheckboxComponent: FC<CheckboxProps> = ({ disabled, label }) => {
  return (
    <div className={style.checkboxWrapper}>
      <Checkbox.Root className={`${disabled ? style.CheckboxRootDisabled : style.CheckboxRoot}`}>
        <Checkbox.Indicator
          className={`${disabled ? style.CheckboxIndicatorDisabled : style.CheckboxIndicator}`}
        >
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={`${disabled ? style.LabelDisabled : style.Label}`}>{label}</label>
    </div>
  )
}
