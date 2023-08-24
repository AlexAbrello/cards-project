import { Meta, StoryObj } from '@storybook/react'

import { SliderComponent } from '@/components/ui/slider/slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: SliderComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof SliderComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {},
}
