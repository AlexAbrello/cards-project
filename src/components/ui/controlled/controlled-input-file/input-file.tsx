import { FC, ReactNode } from 'react'

import s from './input-file.module.scss'
import { Typography } from '../../typography'
import { ImageIcon } from '@/assets/icons/image'

type InputProps = {
   imageSrc?: string | null
   children: ReactNode
}
export const InputWithTypeFile: FC<InputProps> = ({ imageSrc, children }) => {
   return (
      <>
         {imageSrc
            ? <img className={s.coverPreview} src={imageSrc} alt={'image'} />

            : <div className={s.inputFileWrapper}>
               <div className={s.changeCover}>
                  <ImageIcon />
                  <Typography.Subtitle2>Cover Preview</Typography.Subtitle2>
               </div>
            </div>}
         <div className={s.children}>
            {children}
         </div>

      </>
   )
}