import { ComponentProps, KeyboardEvent, forwardRef, useState } from 'react'

import s from './textField.module.scss'

type TextFieldProps = {
  variant?: 'primary' | 'error'
  disabled?: boolean
  callBack?: (value: string) => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  type?: 'text' | 'search' | 'password'
  placeholder: string
  label: string
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ callBack, onEnter, onKeyDown, type, placeholder, label, disabled, ...rest }, ref) => {

  let [error, setError] = useState<string | null>(null)

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }

  return (
    <>
      <label>{label}</label>
      <input
        ref={ref}
        type={type}
        onKeyPress={onKeyPressHandler}
        placeholder={placeholder}
        className={`${error && s.error}`}
        disabled={disabled}
        {...rest}
      />
      {error && <div className={`${s.errorText}`}>{error}</div>}
    </>
  )
})
