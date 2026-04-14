import { type ValueOf } from '@/shared/model/types/valueOf.type'

/** Supported UI locales and the default tag used by formatting helpers. */
export const Locale = {
  Default: 'en',
  EN: 'en',
  UK: 'uk'
} as const

/** Union of {@link Locale} string literals. */
export type Locale = ValueOf<typeof Locale>
