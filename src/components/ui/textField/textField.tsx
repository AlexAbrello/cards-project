import { ComponentProps, KeyboardEvent, forwardRef } from 'react'

import s from './textField.module.scss'

type TextFieldProps = {
  variant?: 'primary' | 'error'
  disabled?: boolean
  error?: boolean
  callBack?: (value: string) => void
  type?: 'text' | 'search' | 'password'
  placeholder: string
  label: string
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ error, onEnter, onKeyDown, type, placeholder, label, disabled, ...rest }, ref) => {

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
        className={`${error && s.error}`}
        disabled={disabled}
        {...rest}
      />
      {error && <div className={`${s.errorText}`}>Error</div>}
    </>
  )
})
