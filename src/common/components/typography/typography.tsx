import {clsx} from 'clsx'
import {ComponentPropsWithoutRef, ElementType} from 'react'

import s from './typography.module.scss'

export type TypographyVariant =
  | 'body'
  | 'error'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'link'
  | 'overline'
  | 'subtitle'
  | 'museoH2'

type TypographyProps<T extends ElementType> = {
  as?: T
  gray?: boolean
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, gray, variant = 'body', ...rest } = props

  const classNames = clsx(s.typography, variant && s[variant], gray && s.gray, className)

  return <Component className={classNames} {...rest} />
}

export default Typography
