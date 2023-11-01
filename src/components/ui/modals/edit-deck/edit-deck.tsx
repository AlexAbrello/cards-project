import { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './edit-deck.module.scss'

import { Write } from '@/assets/icons/write.tsx'
import { Button, ControlledCheckbox, ControlledTextField, DialogComponent } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { useEditDeckMutation } from '@/services/decks'

const createDeckSchema = z.object({
  name: z.string({ required_error: 'Введите имя для колоды' }).nonempty('Enter deck name'),
  isPrivate: z.boolean().default(false),
})

export type CreateDeckForm = z.infer<typeof createDeckSchema>

type EditDeckProps = {
  id: string
}

export const EditDeckComponent: FC<EditDeckProps> = ({ id }) => {
  const [edit] = useEditDeckMutation()
  const [open, setOpen] = useState<boolean>(false)
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateDeckForm>({
    resolver: zodResolver(createDeckSchema),
  })

  const EditDeck = (data: CreateDeckForm) => {
    edit({ id, request: data })
    reset()
    setOpen(false)
  }

  const closeDialogHandler = () => {
    reset()
  }

  return (
    <DialogComponent
      open={open}
      setOpen={setOpen}
      callBack={closeDialogHandler}
      trigger={
        <Button variant={'secondary'} style={{ marginLeft: '5px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Write />
          </div>
        </Button>
      }
      title={'Edit Deck'}
    >
      <form onSubmit={handleSubmit(EditDeck)}>
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
            <Typography.Subtitle2>Edit Deck</Typography.Subtitle2>
          </Button>
        </div>
      </form>
      <DialogClose onClick={closeDialogHandler}>
        <Button variant={'secondary'} type={'button'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
      </DialogClose>
    </DialogComponent>
  )
}
