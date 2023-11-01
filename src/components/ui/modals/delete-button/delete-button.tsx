import { DeleteIcon } from "@/assets/icons/delete-icon"
import { Button, DialogComponent } from "../.."
import { Typography } from "../../typography"
import { DialogClose } from "@radix-ui/react-dialog"
import { FC, useState } from "react"
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { errorOptions, successOptions } from "../../notifications/options"
import { MutationDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks"

type DeleteButtonProps = {
   id: string
   description: string
   callBack: MutationTrigger<MutationDefinition<{ id: string; }, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, "Decks" | "Me" | "Cards", void, "baseApi">>
}

export const DeleteButton: FC<DeleteButtonProps> = ({ id, description, callBack }) => {

   const [open, setOpen] = useState<boolean>(false)

   const deleteHandler = () => {
      callBack({id: id})
         .unwrap()
         .then(() => {
            toast.success(`Successfully`, successOptions)
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
            <Button variant={'secondary'} style={{marginLeft: '5px'}}>
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
         <Typography.Body2>{description}</Typography.Body2>
         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
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