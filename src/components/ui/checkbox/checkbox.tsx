import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import style from './checkbox.module.css'

type CheckboxProps = {
  variant?: 'primary'
  label: string
  disabled?: boolean
  checked?: boolean
  required?: boolean
  id?: string
  onChange: (checked: boolean) => void
}

export const CheckboxComponent: FC<CheckboxProps> = ({
  disabled,
  label,
  onChange,
  id,
  required,
  checked,
}) => {
  return (
    <div className={style.checkboxWrapper}>
      <Checkbox.Root
        className={`${disabled ? style.CheckboxRootDisabled : style.CheckboxRoot}`}
        checked={checked}
        onCheckedChange={onChange}
        required={required}
        id={id}
      >
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
