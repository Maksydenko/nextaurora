import type { ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Luxon format tokens shared by tables, charts, and form demos.
 */
export const DateFormat = {
  chartAxis: 'd LLL',
  chartTooltip: 'd LLL yyyy',
  ddDDyyyy: 'dd.MM.yyyy'
} as const
export type DateFormat = ValueOf<typeof DateFormat>
