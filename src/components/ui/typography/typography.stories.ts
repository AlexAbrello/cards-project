import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'large',
        'body1',
        'body2',
        'subtitle1',
        'subtitle1',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
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
export const Large: Story = {
  args: {
    variant: 'large',
    children: 'This text large style',
  },
}
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'This text body1 style',
  },
}
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'This text body2 style',
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'This text subtitle1 style',
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'This text subtitle2 style',
  },
}
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This text caption style',
  },
}
export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'This text overline style',
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'This text link1 style',
    as: 'a',
    href: 'https://www.google.com/',
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'This text link2 style',
    as: 'a',
    href: 'https://www.google.com/',
  },
}
