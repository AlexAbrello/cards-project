import { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { PlusIcon } from '@/assets/icons/plus.tsx'
import { Button, ControlledTextField, DialogComponent } from '@/components/ui'
import s from '@/components/ui/modals/create-deck/create-deck.module.scss'
import { Typography } from '@/components/ui/typography'
import { useCreateCardMutation } from '@/services/decks'

const createCardSchema = z.object({
  question: z.string({ required_error: 'Введите вопрос' }).nonempty('Enter a question'),
  answer: z.string({ required_error: 'Введите ответ на вопрос' }).nonempty('Enter an answer'),
})

export type CreateCardForm = z.infer<typeof createCardSchema>

type CreateCardProps = {
  id: string | undefined
}

export const CreateCardComponent: FC<CreateCardProps> = ({ id }) => {
  const [create] = useCreateCardMutation()
  const [open, setOpen] = useState<boolean>(false)
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCardForm>({
    resolver: zodResolver(createCardSchema),
  })

  const createCard = (data: CreateCardForm) => {
    create({ id, question: data.question, answer: data.answer })
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
        <Button variant={'primary'}>
          <div style={{ display: 'flex' }}>
            <PlusIcon />
            <div style={{ marginLeft: '10px' }}>
              <Typography.Subtitle2>Add New Card</Typography.Subtitle2>
            </div>
          </div>
        </Button>
      }
      title={'Create New Card'}
    >
      <form onSubmit={handleSubmit(createCard)}>
        <ControlledTextField
          name={'question'}
          control={control}
          label={'Question'}
          type={'text'}
          errorMessage={errors?.question?.message}
        />
        <ControlledTextField
          name={'answer'}
          control={control}
          label={'Answer'}
          type={'text'}
          errorMessage={errors?.answer?.message}
        />
        <div className={s.submitButton}>
          <Button type={'submit'}>
            <Typography.Subtitle2>Add New Card</Typography.Subtitle2>
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
