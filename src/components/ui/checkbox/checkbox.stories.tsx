import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Meta } from '@storybook/react'

import s from './checkbox.module.css'

import { CheckboxComponent } from '@/components/ui/checkbox/checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxComponent>

export default meta

export const TheCheckbox = () => (
  <div className={s.wrapper}>
    <Checkbox.Root className={s.CheckboxRoot} defaultChecked>
      <Checkbox.Indicator className={s.CheckboxIndicator}>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className={s.Label}>Accept terms and conditions.</label>
  </div>
)
