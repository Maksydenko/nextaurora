'use client'

import { type ReactNode, useEffect, useState } from 'react'

import { clsx } from 'clsx'
import {
  type FieldValues,
  type Path,
  type PathValue,
  type RegisterOptions,
  type UseFormReturn
} from 'react-hook-form'
import PhoneInputWithCountrySelect, {
  type Country,
  getCountries,
  getCountryCallingCode
} from 'react-phone-number-input'

import s from './Phone.module.scss'

import 'react-phone-number-input/style.css'

interface PhoneProps<T extends FieldValues> {
  'aria-describedby'?: string
  className?: string
  formReturn: UseFormReturn<T>
  maxLength?: number
  name: Path<T>
  options?: RegisterOptions<T>
  placeholder?: string
  required?: boolean
}

export const Phone = <T extends FieldValues>({
  'aria-describedby': ariaDescribedBy,
  className,
  formReturn,
  maxLength,
  name,
  options,
  placeholder,
  required,
  ...rest
}: PhoneProps<T>): ReactNode => {
  const [currentCountry, setCurrentCountry] = useState<Country | undefined>()
  const {
    formState: { errors },
    register,
    setValue,
    trigger,
    watch
  } = formReturn

  const {
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChange,
    ...restRegister
  } = register(name, options)
  const phoneValue = watch(name)

  /**
   * Updates the default country from the E.164 value so the flag selector matches the dial code.
   *
   * @remarks Parses the calling-code segment after the leading `+`; no-op when the value is empty.
   */
  useEffect(() => {
    if (!phoneValue) {
      return
    }

    const countryCode = phoneValue.slice(1).split(' ')[0]

    const matchedCountry = getCountries().find(
      country => getCountryCallingCode(country) === countryCode
    )

    if (!matchedCountry) {
      return
    }

    setCurrentCountry(matchedCountry as Country)
  }, [phoneValue])

  const control = (
    <PhoneInputWithCountrySelect
      aria-describedby={ariaDescribedBy}
      aria-invalid={!!errors[name]}
      aria-required={Boolean(required ?? options?.required)}
      className={clsx(s.phone, className)}
      defaultCountry={currentCountry}
      disabled={options?.disabled}
      id={name}
      maxLength={maxLength}
      placeholder={placeholder}
      value={phoneValue}
      international
      onChange={value => {
        setValue(name, value as PathValue<T, Path<T>>)
        trigger(name)
      }}
      {...rest}
      {...restRegister}
    />
  )

  return control
}
