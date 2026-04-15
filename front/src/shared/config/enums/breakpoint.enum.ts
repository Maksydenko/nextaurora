import { type ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Max-width breakpoints in pixels for responsive layout checks.
 */
export const Breakpoint = {
  LG: 1023.98,
  MD: 767.98,
  SM: 639.98,
  XL: 1279.98,
  XXL: 1535.98
} as const
export type Breakpoint = ValueOf<typeof Breakpoint>
