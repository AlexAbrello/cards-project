// import { ComponentPropsWithoutRef, ElementType } from 'react'
//
// import s from './button.module.scss'
//
// export type ButtonProps<T extends ElementType = 'button'> = {
//   as?: T
//   variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
//   fullWidth?: boolean
//   className?: string
// } & ComponentPropsWithoutRef<T>
//
// export const Button = <T extends ElementType = 'button'>(
//   props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
// ) => {
//   const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props
//
//   return (
//     <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
//   )
// }

import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Link } from 'react-router-dom'

import s from './button.module.scss'

export type ButtonProps = {
  children: ReactNode
  to?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth,
  className,
  to,
  children,
}) => {
  return to ? (
    <Link to={to} className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}>
      {children}
    </Link>
  ) : (
    <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}>
      {children}
    </button>
  )
}
