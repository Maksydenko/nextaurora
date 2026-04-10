import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const FontSize = {
  Default: 16
} as const
export type FontSize = ValueOf<typeof FontSize>
