import type { ComponentType, Key } from 'react'

import type { IconProps } from '../types'

/**
 * Label/value pair for options in selects, navigation, carousels, and similar UI.
 *
 * @typeParam T - Payload stored in `value` (React node, primitive, etc.).
 * @typeParam K - Label type; usually `string` or another React `Key`-compatible value.
 */
export interface Option<T = string, K = string> {
  id: Key
  label: K
  value: T
}

/**
 * {@link Option} entry that renders a leading icon component.
 *
 * @typeParam T - Same as {@link Option}'s `T`.
 */
export interface OptionWithIcon<T = string> extends Option<T> {
  icon: ComponentType<IconProps>
}

/**
 * {@link Option} entry that references an image URL for the label area.
 *
 * @typeParam T - Same as {@link Option}'s `T`.
 */
export interface OptionWithImage<T = string> extends Option<T> {
  image: string
}
