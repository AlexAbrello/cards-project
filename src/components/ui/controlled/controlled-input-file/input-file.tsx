import { ChangeEvent } from 'react'

import s from './input-with-type-file.module.scss'
import { Typography } from '../../typography'
import { ImageIcon } from '@/assets/icons/image'

type InputProps = {
   handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
   name: string
   errorMessage?: string
   imageSrc?: string | null
   register: any
}
export const InputWithTypeFile = ({
   handleFileChange,
   register,
   name,
   imageSrc,
   errorMessage,
}: InputProps) => {
   return (
      <>
         {imageSrc && <img className={s.coverPreview} src={imageSrc} alt={'image'} />}
         <div className={s.inputFileWrapper}>
            <div className={s.changeCover}>
               <ImageIcon />
               <Typography.Subtitle2>Change Cover</Typography.Subtitle2>
               <input
                  type={'file'}
                  {...register(name)}
                  name={name}
                  className={s.inputFile}
                  onChange={handleFileChange}
               />
            </div>
            {errorMessage ? <div className={s.errorMessage}>{errorMessage}</div> : null}
         </div>
      </>
   )
}