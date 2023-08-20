import { ChangeEvent, FC, useState } from 'react'

import s from './textField.module.scss'

type TextFieldProps = {
  disabled?: boolean
  callBack: (value: string) => void
  type: 'text' | 'search' | 'password'
}

export const TextField: FC<TextFieldProps> = ({ callBack, type }) => {
  let [value, setValue] = useState('')
  let [error, setError] = useState<string | null>(null)

  const textFieldHandler = () => {
    if (value.trim() !== '') {
      callBack(value)
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
      <input
        type={type}
        value={value}
        onChange={onChangeInputHandler}
        onKeyPress={onKeyPressHandler}
      />
      {error && <div className={s.error}>{error}</div>}
    </>
  )
}
