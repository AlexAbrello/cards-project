import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'This text h1 style',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'This text h2 style',
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'This text h3 style',
  },
}
// export const Link: Story = {
//   args: {
//     variant: 'link',
//     children: 'Tertiary Button',
//     disabled: false,
//   },
// }
//
// export const FullWidth: Story = {
//   args: {
//     variant: 'primary',
//     children: 'Full Width Button',
//     disabled: false,
//     fullWidth: true,
//   },
// }
//
// export const AsLink: Story = {
//   args: {
//     variant: 'primary',
//     children: 'Link that looks like a button',
//     as: 'a',
//     href: 'https://www.google.com/',
//   },
// }
