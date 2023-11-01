import { DeleteIcon } from "@/assets/icons/delete-icon"
import { Button, DialogComponent } from "../.."
import { Typography } from "../../typography"
import { DialogClose } from "@radix-ui/react-dialog"
import { FC, useState } from "react"
import { useDeleteCardMutation } from "@/services/cards"
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { errorOptions, successOptions } from "../../notifications/options"

type DeleteCardProps = {
   id: string
}

export const DeleteCard: FC<DeleteCardProps> = ({ id }) => {

   const [open, setOpen] = useState<boolean>(false)

   const [deleteCard] = useDeleteCardMutation()

   const deleteHandler = () => {
      deleteCard({ id: id })
         .unwrap()
         .then(() => {
            toast.success(`The card was deleted successfully`, successOptions)
         })
         .catch(() => {
            toast.error('Something went wrong, try again', errorOptions)
         })
      setOpen(false)
   }
   return (
      <DialogComponent
         open={open}
         setOpen={setOpen}
         title={'Delete Card'}
         trigger={
            <Button variant={'secondary'}>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                  }}
               >
                  <DeleteIcon />
               </div>
            </Button>
         }
      >
         <Typography.Body2>Do you really want to delete this card?</Typography.Body2>
         <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
         <DialogClose>
            <Button variant={'secondary'}>
               <Typography.Subtitle2>Cancel</Typography.Subtitle2>
            </Button>
         </DialogClose>
         <Button onClick={deleteHandler}>
            <Typography.Subtitle2>Delete</Typography.Subtitle2>
         </Button>
         </div>
      </DialogComponent>
   )
}