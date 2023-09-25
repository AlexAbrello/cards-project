import { ComponentProps } from 'react'

import s from './avatar.module.scss'

import { Typography } from '@/components/ui/typography'

export type AvatarProps = {
  name?: string
  src?: ComponentProps<'img'>['src']
  size?: ComponentProps<'img'>['width']
}

export const Avatar = ({
  name,
  src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
  size = 36,
}: AvatarProps) => {
  return name ? (
    <div className={s.wrapper}>
      <Typography.Subtitle1>{name}</Typography.Subtitle1>
      <img className={s.avatar} src={src} alt={`${name} avatar`} width={size} height={size} />
    </div>
  ) : (
    <img className={s.avatar} src={src} alt={`${name} avatar`} width={size} height={size} />
  )
}
