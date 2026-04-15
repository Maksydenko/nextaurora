'use client'

import type { HTMLInputTypeAttribute, JSX } from 'react'

import { clsx } from 'clsx'
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn
} from 'react-hook-form'

import s from './Input.module.scss'

interface InputProps<T extends FieldValues> {
  'aria-describedby'?: string
  className?: string
  formReturn: UseFormReturn<T>
  maxLength?: number
  name: Path<T>
  onBlur?: () => void
  onFocus?: () => void
  options?: RegisterOptions<T>
  placeholder?: string
  required?: boolean
  type?: HTMLInputTypeAttribute
}

export const Input = <T extends FieldValues>({
  'aria-describedby': ariaDescribedBy,
  className,
  formReturn,
  maxLength,
  name,
  onBlur,
  onFocus,
  options,
  placeholder,
  required,
  type,
  ...rest
}: InputProps<T>): JSX.Element => {
  const {
    formState: { errors },
    register
  } = formReturn
  const { onBlur: handleBlur, ...restRegister } = register(name, options)

  const error = errors[name]
  const disabled = options?.disabled

  const Tag = type === 'textarea' ? 'textarea' : 'input'
  const nativeType = Tag === 'input' ? (type ?? 'text') : undefined

  return (
    <Tag
      aria-describedby={ariaDescribedBy}
      aria-invalid={!!error}
      aria-required={Boolean(required ?? options?.required)}
      autoComplete={name}
      className={clsx(s.input, className)}
      disabled={disabled}
      id={name}
      maxLength={maxLength}
      placeholder={placeholder}
      {...(nativeType !== undefined
        ? {
            type: nativeType
          }
        : {})}
      onBlur={e => {
        handleBlur(e)
        onBlur?.()
      }}
      onFocus={onFocus}
      {...rest}
      {...restRegister}
    />
  )
}
