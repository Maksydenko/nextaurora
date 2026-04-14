import { type ComponentProps, type JSX } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

interface CardProps extends ComponentProps<'article'> {
  description: string
  title: string
}

export const Card = ({
  className,
  description,
  title,
  ...rest
}: CardProps): JSX.Element => (
  <article className={clsx(s.card, className)} {...rest}>
    <div className={s.card__image} aria-hidden />

    <div className={s.card__body}>
      <h3 className={s.card__title}>{title}</h3>

      <p className={s.card__description}>{description}</p>
    </div>
  </article>
)
