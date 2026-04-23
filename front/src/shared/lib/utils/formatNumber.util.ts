import { Locale } from '@/shared/config'

interface FormatNumberOptions extends Intl.NumberFormatOptions {
  locales?: Locale
  number: number
}

/**
 * Locale-aware number string using `Intl.NumberFormat` rules.
 *
 * @param locales - BCP 47 locale tag; defaults to `Locale.UK`.
 * @param number - Numeric value to format.
 * @param useGrouping - Thousands separators; default `true`.
 * @returns Formatted string, or empty when `number` is `NaN`.
 */
export const formatNumber = ({
  locales = Locale.UK,
  number = 0,
  useGrouping = true,
  ...options
}: FormatNumberOptions): string => {
  if (Number.isNaN(number)) {
    return ''
  }

  return number.toLocaleString(locales, {
    useGrouping,
    ...options
  })
}
