import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

import type {
  FieldValues,
  Path,
  RegisterOptions
} from 'react-hook-form'

import type { Option } from './option.interface'

/**
 * Declarative field config for wrapping `react-hook-form` `Field` / inputs.
 *
 * @typeParam T - Form values type the field `name` path belongs to.
 */
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
