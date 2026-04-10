import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const Direction = {
  Horizontal: 'horizontal',
  Vertical: 'vertical'
} as const
export type Direction = ValueOf<typeof Direction>

export const SlideDirection = {
  Next: 'next',
  Prev: 'prev'
} as const
export type SlideDirection = ValueOf<typeof SlideDirection>
