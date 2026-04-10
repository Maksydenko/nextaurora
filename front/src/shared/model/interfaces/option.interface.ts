import { type ComponentType, type Key } from 'react'

import { type IconProps } from '../types'

export interface Option<T = string, K = string> {
  id: Key
  label: K
  value: T
}

export interface OptionWithIcon<T = string> extends Option<T> {
  icon: ComponentType<IconProps>
}

export interface OptionWithImage<T = string> extends Option<T> {
  image: string
}
