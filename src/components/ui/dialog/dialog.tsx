import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './dialog.module.scss'

import { CloseIcon } from '@/assets/icons/close-icon.tsx'
import { Typography } from '@/components/ui/typography'

type DialogProps = {
  trigger: ReactNode
  title: string
  description?: string
  children?: ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogComponent: FC<DialogProps> = ({
  trigger,
  title,
  description,
  children,
  setOpen,
  open,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={s.dialogTrigger} asChild>
        <button>{trigger}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <Dialog.Title className={s.dialogTitle}>
            <Typography.H2>{title}</Typography.H2>
          </Dialog.Title>
          <Dialog.Description className={s.dialogDescription}>
            <Typography.Subtitle1>{description}</Typography.Subtitle1>
          </Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button className={s.iconButton} aria-label="Close">
              <CloseIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
