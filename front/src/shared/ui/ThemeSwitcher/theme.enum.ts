import { type ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Theme mode values for `next-themes` and the theme switcher.
 */
export const Theme = {
  Dark: 'dark',
  Light: 'light',
  System: 'system'
} as const
export type Theme = ValueOf<typeof Theme>
