import { type ValueOf } from '@/shared/model/types/valueOf.type'

/** Translation namespace segments passed to `next-intl`. */
export const Translation = {
  Shared: 'shared'
} as const

/** Union of {@link Translation} string literals. */
export type Translation = ValueOf<typeof Translation>
