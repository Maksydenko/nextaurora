import { type ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Ascending vs descending sort direction for tables and lists.
 */
export const SortOrder = {
  Asc: 'asc',
  Desc: 'desc'
} as const
export type SortOrder = ValueOf<typeof SortOrder>
