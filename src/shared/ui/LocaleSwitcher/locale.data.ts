import { Locale } from '@/shared/config'
import type { Option } from '@/shared/model'

/**
 * Locale options shown in the locale switcher (labels + `Locale` values).
 */
export const localeData: Option[] = [
  {
    id: 1,
    label: 'en',
    value: Locale.EN
  },
  {
    id: 2,
    label: 'uk',
    value: Locale.UK
  }
]
