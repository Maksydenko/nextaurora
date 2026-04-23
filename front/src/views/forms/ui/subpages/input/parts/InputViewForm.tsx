'use client'

import type { JSX } from 'react'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import {
  getInputViewFields,
  inputViewFormSchema,
  type InputViewFormValues
} from '@/views/forms/model'

import { Field } from '@/shared/ui'

import s from '../InputView.module.scss'

export const InputViewForm = (): JSX.Element => {
  const formReturn = useForm<InputViewFormValues>({
    defaultValues: {
      description: '',
      title: ''
    },
    resolver: zodResolver(inputViewFormSchema)
  })

  const fields = getInputViewFields()

  return (
    <div className={s.inputView__form}>
      {fields.map(({ label, maxLength, name, placeholder, required, type }) => (
        <Field
          key={String(name)}
          formReturn={formReturn}
          label={label}
          maxLength={maxLength}
          name={name}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      ))}
    </div>
  )
}
