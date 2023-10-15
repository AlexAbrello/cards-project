import { useState } from 'react'

import { DialogClose } from '@radix-ui/react-dialog'

import { PlusIcon } from '@/assets/icons/plus.tsx'
import { Button, DialogComponent } from '@/components/ui'
import { Typography } from '@/components/ui/typography'

export const CreateCardComponent = () => {
  const [open, setOpen] = useState<boolean>(false)

  const closeDialogHandler = () => {}

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
      <DialogClose onClick={closeDialogHandler}>
        <Button variant={'secondary'} type={'button'}>
          <Typography.Subtitle2>Cancel</Typography.Subtitle2>
        </Button>
      </DialogClose>
    </DialogComponent>
  )
}
