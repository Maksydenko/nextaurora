'use client'

import type { JSX } from 'react'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import {
  getPhoneViewFields,
  phoneViewFormSchema,
  type PhoneViewFormValues
} from '@/views/forms/model'

import { Field } from '@/shared/ui'

export const PhoneViewForm = (): JSX.Element => {
  const formReturn = useForm<PhoneViewFormValues>({
    defaultValues: {
      mobile: ''
    },
    resolver: zodResolver(phoneViewFormSchema)
  })

  const fields = getPhoneViewFields()

  return (
    <div>
      {fields.map(
        ({ label, maxLength, name, placeholder, required, type }) => (
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
        )
      )}
    </div>
  )
}
