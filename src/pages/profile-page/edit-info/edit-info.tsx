import { Write } from "@/assets/icons/write"
import { Avatar, Button, Card, ControlledTextField } from "@/components/ui"
import { errorOptions, successOptions } from "@/components/ui/notifications/options"
import { Typography } from "@/components/ui/typography"
import { MeResponse, useEditPersonalInfoMutation } from "@/services/auth/auth-api"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChangeEvent, FC, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

type EditInfoProps = {
   data: MeResponse
   callBack: () => void
}

const editNameShema = z.object({
   name: z.string({ required_error: 'Введите имя' }).nonempty('Enter the Name'),
   avatar: z.any()
})

type EditNameForm = z.infer<typeof editNameShema>

export const EditInfo: FC<EditInfoProps> = ({ data, callBack }) => {

   const [avatarPreview, setAvatarPreview] = useState('')
   const [avatarPreviewError, setAvatarPreviewError] = useState('')

   const [editInfo] = useEditPersonalInfoMutation()

   const {
      register,
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<EditNameForm>({
      resolver: zodResolver(editNameShema),
   })

   const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
      const avatar = event.target.name === 'avatar'
      const file = event.target.files?.[0]

      if (!file) {
         return
      }

      const allowedTypes = ['image/jpeg', 'image/png']

      if (!allowedTypes.includes(file.type)) {
         avatar && setAvatarPreviewError('Only JPEG and PNG images are allowed.')

         return
      }
      const maxSizeInBytes = 1024 * 1024

      if (file.size > maxSizeInBytes) {
         avatar && setAvatarPreviewError('The image size should not exceed 1MB.')

         return
      }

      avatar && setAvatarPreview(URL.createObjectURL(file))
      setAvatarPreviewError('')

   }

   const onEditHandler = (dataForm: EditNameForm) => {

      console.log(dataForm.avatar)
      editInfo({
         avatar: dataForm.avatar ? dataForm.avatar[0] : data.avatar,
         email: data.email,
         name: dataForm.name || data.name
      })
         .unwrap()
         .then(() => {
            toast.success(`Your personal info edited successfully`, successOptions)
            callBack()
         })
         .catch(() => {
            toast.error('Something went wrong, try again', errorOptions)
            callBack()
         })
   }

   const onBackHandler = () => {
      callBack()
      reset()
   }

   return (
      <Card>
         <div style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography.H2>Edit Personal Information</Typography.H2>
            <Button variant={"tertiary"} onClick={onBackHandler}>
               <Typography.Caption>Back</Typography.Caption>
            </Button>
            {avatarPreview
               ? <Avatar src={avatarPreview} size={100} />
               : <Avatar src={data.avatar} size={100} />
            }
            <input type='file' {...register('avatar')} onChange={handleImageChange} />
            <Write />
            <form onSubmit={handleSubmit(onEditHandler)}>
               <ControlledTextField
                  defaultValue={data.name}
                  name={'name'}
                  control={control}
                  label={'Name'}
                  type={'text'}
                  errorMessage={errors?.name?.message} />
               <Button variant={'primary'} fullWidth={true} type={'submit'}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <Typography.Caption>Save Changes</Typography.Caption>
                  </div>
               </Button>
            </form>
         </div>
      </Card>
   )
}