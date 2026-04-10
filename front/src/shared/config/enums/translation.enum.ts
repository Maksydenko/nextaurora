import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const Translation = {
  Shared: 'shared'
} as const
export type Translation = ValueOf<typeof Translation>
