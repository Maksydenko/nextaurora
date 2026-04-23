import type { ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Root font size used when converting px to rem.
 */
export const FontSize = {
  Default: 16
} as const
export type FontSize = ValueOf<typeof FontSize>
