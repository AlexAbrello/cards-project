import { ComponentProps, FC, KeyboardEvent, useState } from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'

import CloseEye from '@/assets/icons/close-eye.tsx'
import OpenEye from '@/assets/icons/open-eye.tsx'
import Search from '@/assets/icons/search.tsx'
import { Typography } from '@/components/ui/typography'

export type TextFieldProps = {
  disabled?: boolean
  errorMessage?: string
  callBack?: (value: string) => void
  type?: 'text' | 'search' | 'password'
  placeholder?: string
  label?: string
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
} & ComponentProps<'input'>

export const TextField: FC<TextFieldProps> = ({
  errorMessage,
  onEnter,
  onKeyDown,
  type,
  placeholder,
  label,
  disabled,
  ...rest
}) => {
  const showError = !!errorMessage && errorMessage.length > 0

  const [passwordShown, setPasswordShown] = useState(false)
  const [inputType, setType] = useState(type)

  const showPassword = () => {
    setPasswordShown(!passwordShown)
    if (inputType === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  const classNames = {
    icon: clsx(s.icon, disabled && s.iconDisabled),
    wrapper: s.inputWrapper,
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }

  return (
    <>
      <label>
        <Typography.Body2>{label}</Typography.Body2>
        <div className={classNames.wrapper}>
          <input
            type={inputType}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={`${showError && s.error}`}
            disabled={disabled}
            {...rest}
          />
          {type === 'password' ? (
            passwordShown ? (
              <OpenEye className={classNames.icon} onClick={showPassword} />
            ) : (
              <CloseEye className={classNames.icon} onClick={showPassword} />
            )
          ) : type === 'search' ? (
            <Search className={classNames.icon} />
          ) : (
            <></>
          )}
        </div>
        {showError && <div className={`${s.errorText}`}>{errorMessage}</div>}
      </label>
    </>
  )
}
