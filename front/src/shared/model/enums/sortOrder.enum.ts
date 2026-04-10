import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const SortOrder = {
  Asc: 'asc',
  Desc: 'desc'
} as const
export type SortOrder = ValueOf<typeof SortOrder>
