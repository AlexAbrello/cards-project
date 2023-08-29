// import { Meta, StoryObj } from '@storybook/react'
//
// import { Radio } from '@/components/ui/radio/radio.tsx'
//
// const meta = {
//   title: 'Components/Radio',
//   component: Radio,
//   tags: ['autodocs'],
// } satisfies Meta<typeof Radio>
//
// export default meta
// type Story = StoryObj<typeof meta>
//
// export const RadioButton: Story = {
//   args: {
//     label: 'Radio button',
//     disabled: false,
//   },
// }

import { FC } from 'react'

import { Meta } from '@storybook/react'

import { Radio, RadioProps } from '@/components/ui'

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta

const options = [{ value: 'Option 1' }, { value: 'Option 2' }, { value: 'Option 3' }]

export const Default: FC<RadioProps> = args => <Radio {...args} />

Default.args = {
  options: options,
}

export const Disabled: FC<RadioProps> = args => <Radio {...args} />

Disabled.args = {
  options: options,
  disabled: true,
}
