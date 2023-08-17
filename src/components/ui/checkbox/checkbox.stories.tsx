import { FC } from 'react'

import { Meta } from '@storybook/react'

import s from '@/components/ui/checkbox/checkbox.module.css'
import { Checkbox } from '@/components/ui/checkbox/checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type CheckboxProps = {
  label: string
  checked: boolean
  disabled: boolean
}
export const CheckedCheckbox: FC<CheckboxProps> = () => {
  return (
    <label className={s.formControl}>
      <input type="checkbox" name="checkbox" checked={true} />
      <span></span>
      Some text
    </label>
  )
}
export const UncheckedCheckbox: FC<CheckboxProps> = () => {
  return (
    <label className={s.formControl}>
      <input type="checkbox" name="checkbox" checked={false} />
      <span></span>
      Some text
    </label>
  )
}
export const CheckedCheckboxDisabled: FC<CheckboxProps> = () => {
  return (
    <label className={s.formControl}>
      <input type="checkbox" name="checkbox" checked={true} disabled={true} />
      <span className={s.disabled}></span>
      Some text
    </label>
  )
}
