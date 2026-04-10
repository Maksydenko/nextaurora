import { type JSX } from 'react'

import { clsx } from 'clsx'

import s from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps): JSX.Element => (
  <div className={clsx(s.loader, className)} />
)
