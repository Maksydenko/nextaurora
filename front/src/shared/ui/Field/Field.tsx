'use client'

import { type HTMLInputTypeAttribute, type ReactNode, useId } from 'react'

import { clsx } from 'clsx'
import {
  type FieldValues,
  type Path,
  type RegisterOptions,
  type UseFormReturn
} from 'react-hook-form'

import { formatLabel } from './utils'

import { Input } from './Input/Input'
import { Phone } from './Phone/Phone'

import s from './Field.module.scss'

interface FieldProps<T extends FieldValues> {
  className?: string
  formReturn: UseFormReturn<T>
  label?: string
  maxLength?: number
  message?: string
  name: Path<T>
  options?: RegisterOptions<T>
  placeholder?: string
  required?: boolean
  type?: Exclude<HTMLInputTypeAttribute, 'file'>
}

export const Field = <T extends FieldValues>({
  className,
  formReturn,
  label,
  maxLength,
  name,
  options,
  placeholder,
  required,
  type,
  ...props
}: FieldProps<T>): ReactNode => {
  const errorMessageId = useId()

  const {
    formState: { errors }
  } = formReturn
  const errorMessage =
    typeof errors[name]?.message === 'string' ? errors[name].message : null
  const ariaDescribedBy = errorMessage ? errorMessageId : undefined

  const formattedLabel = label && formatLabel(label, required)
  const formattedPlaceholder = placeholder && formatLabel(placeholder, required)

  let field

  switch (type) {
    case 'tel':
      field = (
        <Phone
          aria-describedby={ariaDescribedBy}
          formReturn={formReturn}
          maxLength={maxLength}
          name={name}
          options={options}
          placeholder={formattedPlaceholder}
          required={required}
          {...props}
        />
      )
      break
    default:
      field = (
        <Input
          aria-describedby={ariaDescribedBy}
          formReturn={formReturn}
          maxLength={maxLength}
          name={name}
          options={options}
          placeholder={formattedPlaceholder}
          required={required}
          type={type}
          {...props}
        />
      )
      break
  }

  return (
    <div className={clsx(s.field, className)}>
      <div className={s.field__body}>
        {label && (
          <label className={s.field__label} htmlFor={name}>
            {formattedLabel}
          </label>
        )}

        <div className={s.field__control}>{field}</div>

        {errorMessage && (
          <p className={s.field__error} id={errorMessageId} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  )
}
