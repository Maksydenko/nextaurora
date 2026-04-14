import { type ValueOf } from '@/shared/model/types/valueOf.type'

/** URL scheme values used when building absolute links. */
export const Protocol = {
  Http: 'http',
  Https: 'https'
} as const

/** Union of {@link Protocol} string literals. */
export type Protocol = ValueOf<typeof Protocol>
