import { ChangeEvent, FC, useState } from 'react'

import s from './textField.module.scss'

type TextFieldProps = {
  variant?: 'primary'
  disabled?: boolean
  callBack?: (value: string) => void
  type?: 'text' | 'search' | 'password'
  placeholder: string
  label: string
}

export const TextField: FC<TextFieldProps> = ({ callBack, type, placeholder, label, disabled }) => {
  let [value, setValue] = useState('')
  let [error, setError] = useState<string | null>(null)

  const textFieldHandler = () => {
    if (value.trim() !== '') {
      callBack?.(value)
      setValue('')
    } else {
      setError('Title is required')
    }
  }

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null)
    }
    if (e.charCode === 13) {
      textFieldHandler()
    }
  }

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChangeInputHandler}
        onKeyPress={onKeyPressHandler}
        placeholder={placeholder}
        className={`${error && s.error}`}
        disabled={disabled}
      />
      {error && <div className={`${s.errorText}`}>{error}</div>}
    </>
  )
}
