import { ComponentProps, KeyboardEvent, forwardRef } from 'react'

import s from './textField.module.scss'

type TextFieldProps = {
  disabled?: boolean
  errorMessage?: string
  callBack?: (value: string) => void
  type?: 'text' | 'search' | 'password'
  placeholder: string
  label: string
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ errorMessage, onEnter, onKeyDown, type, placeholder, label, disabled, ...rest }, ref) => {

  const showError = !!errorMessage && errorMessage.length > 0

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`${showError && s.error}`}
        disabled={disabled}
        {...rest}
      />
      {showError && <div className={`${s.errorText}`}>{errorMessage}</div>}
    </>
  )
})
