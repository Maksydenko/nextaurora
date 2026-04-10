import { Locale } from '@/shared/config'

interface FormatNumberOptions extends Intl.NumberFormatOptions {
  locales?: Locale
  number: number
}

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
