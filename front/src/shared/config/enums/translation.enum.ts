import { type ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Translation namespace segments passed to `next-intl`.
 */
export const Translation = {
  Shared: 'shared'
} as const
export type Translation = ValueOf<typeof Translation>
