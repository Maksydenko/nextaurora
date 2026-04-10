import {
  type ButtonHTMLAttributes,
  cloneElement,
  isValidElement,
  type JSX,
  type ReactNode
} from 'react'

import { clsx } from 'clsx'

import { type Option } from '@/shared/model'

import { Image } from '../Image/Image'
import { Loader } from '../Loader/Loader'

import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  icon?: Option<React.ReactNode>
  isLoading?: boolean
}

export const Button = ({
  asChild,
  children,
  className,
  disabled,
  icon,
  isLoading,
  type = 'button',
  ...props
}: ButtonProps): JSX.Element => {
  const classNames = clsx(s.button, isLoading && s.button_loading, className)
  const iconValue = icon?.value
  const isDisabled = disabled || isLoading

  const getBodyElement = (children: ReactNode) => (
    <div className={s.button__body}>
      <div className={s.button__content}>
        {typeof children === 'string' ? (
          <p className={s.button__box}>{children}</p>
        ) : (
          children
        )}

        {typeof iconValue === 'string' ? (
          <Image
            alt={icon!.label}
            className={s.button__icon}
            height={20}
            src={iconValue}
            width={20}
          />
        ) : (
          iconValue
        )}
      </div>

      {isLoading && <Loader className={s.button__loader} />}
    </div>
  )

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      ['aria-disabled']: isDisabled || children.props['aria-disabled'],
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      children: getBodyElement(children.props.children),
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      className: clsx(classNames, children.props.className)
    })
  }

  return (
    <button
      className={clsx(classNames)}
      disabled={isDisabled}
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      {...props}
    >
      {getBodyElement(children)}
    </button>
  )
}
