import { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField.tsx'

const meta = {
  title: 'Components/textField',
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

//
// type TextFieldProps = {
//   disabled?: boolean
//   error?: boolean
//   type?: 'text' | 'search' | 'password'
// }
//
// export const TextFieldComponent: FC<TextFieldProps> = ({ type, error }) => {
//   return (
//     <>
//       <label>Just the Text Field</label>
//       <input type={type} placeholder={'input'} />
//       {error && <div className={s.error}>{error}</div>}
//     </>
//   )
// }
//
// export const TextFieldComponentWithError: FC<TextFieldProps> = ({ type, error = 'Error!' }) => {
//   return (
//     <>
//       <label>Text Field with error</label>
//       <input type={type} placeholder={'Error'} className={`${error && s.inputError}`} />
//       {error && <div className={s.error}>{error}</div>}
//     </>
//   )
// }
//
// export const TextFieldComponentDisabled: FC<TextFieldProps> = ({ type, error = null }) => {
//   return (
//     <>
//       <label>Disabled Text Field</label>
//       <input
//         type={type}
//         placeholder={'Disabled'}
//         className={`${error && s.inputError}`}
//         disabled={true}
//       />
//       {error && <div className={s.error}>{error}</div>}
//     </>
//   )
// }
