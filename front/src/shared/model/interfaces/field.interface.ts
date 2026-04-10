import { type HTMLInputTypeAttribute, type InputHTMLAttributes } from 'react'

import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

import { type Option } from './option.interface'

export interface Field<T extends FieldValues> extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'className'
  | 'disabled'
  | 'id'
  | 'max'
  | 'min'
  | 'minLength'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'ref'
> {
  icon?: string
  isLoading?: boolean
  items?: Option[]
  label?: string
  name: Path<T>
  options?: RegisterOptions<T>
  type?: HTMLInputTypeAttribute
}
