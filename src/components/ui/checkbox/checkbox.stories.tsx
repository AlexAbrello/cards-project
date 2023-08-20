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
export const CheckboxComponent: FC<CheckboxProps> = () => {
  return (
    <label className={s.formControl}>
      <input type="checkbox" name="checkbox" />
      <span></span>
      Just the checkbox component
    </label>
  )
}

export const CheckedCheckboxDisabled: FC<CheckboxProps> = () => {
  return (
    <label className={s.formControl}>
      <input type="checkbox" name="checkbox" checked={true} disabled={true} />
      <span></span>
      Checked checkbox disabled
    </label>
  )
}

export const UncheckedCheckboxDisabled: FC<CheckboxProps> = () => {
  return (
    <label className={s.formControl}>
      <input type="checkbox" name="checkbox" checked={false} disabled={true} />
      <span></span>
      Unchecked checkbox disabled
    </label>
  )
}
