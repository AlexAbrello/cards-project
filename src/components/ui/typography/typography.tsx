import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.css'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { variant, className, as: Component = 'p', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
