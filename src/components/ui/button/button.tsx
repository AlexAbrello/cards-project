import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Link } from 'react-router-dom'

import s from './button.module.scss'

export type ButtonProps = {
  children: ReactNode
  to?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth,
  className,
  to,
  children,
  disabled,
  ...rest
}) => {
  return to ? (
    <Link to={to} className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}>
      {children}
    </Link>
  ) : (
    <button
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
