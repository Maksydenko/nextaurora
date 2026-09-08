import type { ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Axis direction for carousels, lists, and keyboard navigation.
 */
export const Direction = {
  Horizontal: 'horizontal',
  Vertical: 'vertical'
} as const
export type Direction = ValueOf<typeof Direction>

/**
 * Prev/next slide intent for Swiper-style components.
 */
export const SlideDirection = {
  Next: 'next',
  Prev: 'prev'
} as const
export type SlideDirection = ValueOf<typeof SlideDirection>
