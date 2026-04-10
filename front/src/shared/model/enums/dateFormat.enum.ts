import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const DateFormat = {
  chartAxis: 'd LLL',
  chartTooltip: 'd LLL yyyy',
  ddDDyyyy: 'dd.MM.yyyy'
} as const
export type DateFormat = ValueOf<typeof DateFormat>
