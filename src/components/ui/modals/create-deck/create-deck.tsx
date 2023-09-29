import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './create-deck.module.scss'

import { PlusIcon } from '@/assets/icons/plus.tsx'
import { Button, ControlledCheckbox, ControlledTextField, DialogComponent } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { useCreateDeckMutation } from '@/services/decks'

const createDeckSchema = z.object({
  name: z.string({ required_error: 'Введите имя для колоды' }).nonempty('Enter deck name'),
  isPrivate: z.boolean().default(false),
})

export type CreateDeckForm = z.infer<typeof createDeckSchema>

export const CreateDeckComponent = () => {
  const [create] = useCreateDeckMutation()
  const [open, setOpen] = useState<boolean>(false)
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateDeckForm>({
    resolver: zodResolver(createDeckSchema),
  })

  const CreateDeck = (data: CreateDeckForm) => {
    create(data)
    reset()
    setOpen(false)
  }

  return (
    <DialogComponent
      open={open}
      setOpen={setOpen}
      trigger={
        <Button variant={'primary'}>
          <div style={{ display: 'flex' }}>
            <PlusIcon />
            <div style={{ marginLeft: '10px' }}>
              <Typography.Subtitle2>Add New Deck</Typography.Subtitle2>
            </div>
          </div>
        </Button>
      }
      title={'Create New Deck'}
    >
      <form onSubmit={handleSubmit(CreateDeck)}>
        <ControlledTextField
          name={'name'}
          control={control}
          label={'Deck Name'}
          type={'text'}
          errorMessage={errors?.name?.message}
        />
        <div className={s.checkbox}>
          <ControlledCheckbox name={'isPrivate'} control={control} label={'Private Deck'} />
        </div>
        <div className={s.submitButton}>
          <Button type={'submit'}>
            <Typography.Subtitle2>Add New Deck</Typography.Subtitle2>
          </Button>
        </div>
      </form>
      <DialogClose>
        <Button variant={'secondary'} type={'button'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
      </DialogClose>
    </DialogComponent>
  )
}
