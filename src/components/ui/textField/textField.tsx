import { ChangeEvent, FC, useState } from 'react'

type TextFieldProps = {
  disabled?: boolean
  callBack: (value: string) => void
}

export const TextField: FC<TextFieldProps> = ({ callBack }) => {
  let [value, setValue] = useState('')
  let [error, setError] = useState<string | null>(null)

  const addItemHandler = () => {
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
      addItemHandler()
    }
  }

  return <input value={value} onChange={onChangeInputHandler} onKeyPress={onKeyPressHandler} />
}
