import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const Theme = {
  Dark: 'dark',
  Light: 'light',
  System: 'system'
} as const
export type Theme = ValueOf<typeof Theme>
