import { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField.tsx'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const TextFieldComponent: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    placeholder: 'Input',
    label: 'Some input text',
  },
}
