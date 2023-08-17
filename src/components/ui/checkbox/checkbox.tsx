import { ChangeEvent, FC } from 'react'

import s from './checkbox.module.css'

type CheckboxProps = {
  label: string
  checked: boolean
  callBack: (checked: boolean) => void
  disabled?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({ label, callBack, disabled }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    callBack(e.currentTarget.checked)
  }

  return (
    <label className={s.formControl}>
      <input type="checkbox" name="checkbox" onChange={onChangeHandler} />
      <span className={`${disabled && s.disabled}`}></span>
      {label}
    </label>
  )
}
