import { Meta, StoryObj } from '@storybook/react'

import { Radio } from '@/components/ui/radio/radio.tsx'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const RadioButton: Story = {
  args: {
    label: 'Radio button',
    disabled: false,
  },
}
