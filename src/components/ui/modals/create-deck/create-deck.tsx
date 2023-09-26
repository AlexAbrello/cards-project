import { DialogClose } from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'

import s from './create-deck.module.scss'

import { Button, ControlledCheckbox, ControlledTextField, DialogComponent } from '@/components/ui'
import { Typography } from '@/components/ui/typography'

export const CreateDeckComponent = () => {
  const { control, handleSubmit } = useForm()

  return (
    <DialogComponent
      trigger={
        <Button variant={'primary'}>
          <Typography.Subtitle2>Add New Deck</Typography.Subtitle2>
        </Button>
      }
      title={'Create New Deck'}
    >
      <form>
        <ControlledTextField name={'deck'} control={control} label={'Deck Name'} type={'text'} />
        <div className={s.checkbox}>
          <ControlledCheckbox name={'private'} control={control} label={'Private Deck'} />
        </div>
        <div className={s.submitButton}>
          <DialogClose>
            <Button type={'submit'}>
              <Typography.Subtitle2>Add New Deck</Typography.Subtitle2>
            </Button>
          </DialogClose>
        </div>
      </form>
      <DialogClose>
        <Button variant={'secondary'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
      </DialogClose>
    </DialogComponent>
  )
}
