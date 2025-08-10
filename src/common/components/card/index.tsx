import {clsx} from 'clsx'
import {ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef} from 'react'

import s from './card.module.scss'

type Props<T extends ElementType = 'div'> = {
	as?: T
	useMuseoTitle?: boolean
} & ComponentPropsWithoutRef<T>
type InferType<T> = T extends ElementType<infer U> ? U : never

const Card = forwardRef(<T extends ElementType = 'div'>(props: Props<T>, ref: ForwardedRef<InferType<T>>) => {
		const { as: Component = 'div', useMuseoTitle, className, ...rest } = props
		const classNames = clsx(s.card, className, useMuseoTitle && s.hasGradient)

		return <Component className={classNames} ref={ref} {...rest} />
	}
)

Card.displayName = 'Card'

export default Card
