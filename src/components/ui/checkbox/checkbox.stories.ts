import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxComponent } from './'

const meta = {
  title: 'Components/CheckBox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['checked', 'unchecked'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    variant: 'checked',
    children: 'Checked checkbox',
    checked: true,
  },
}
export const Unchecked: Story = {
  args: {
    variant: 'unchecked',
    children: 'Unchecked checkbox',
    checked: false,
  },
}
