import { FC } from 'react'

import s from './header.module.scss'

type HeaderProps = {
  children?: React.ReactNode
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return <header className={s.root}>{children}</header>
}
