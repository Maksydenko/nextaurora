import { Percent } from '@/shared/model'

import { formatNumber } from './formatNumber.util'

interface FormatPriceOptions extends Intl.NumberFormatOptions {
  price: number
}

/**
 * Formats a non-negative price in hryvnia using shared number formatting rules.
 *
 * @param price - Monetary amount; negative values yield an empty string.
 * @param maximumFractionDigits - Passed through to `formatNumber` when set.
 * @param minimumFractionDigits - Passed through to `formatNumber` when set.
 * @returns String like `"1 234 ₴"`, or empty when formatting fails.
 *
 * @remarks Rounds up to the chosen fraction precision before formatting.
 */
export const formatPrice = ({
  maximumFractionDigits,
  minimumFractionDigits,
  price,
  ...options
}: FormatPriceOptions): string => {
  if (price < 0) {
    return ''
  }

  const fractionDigits = maximumFractionDigits || minimumFractionDigits
  const roundedPrice = Math.ceil(price * Percent.Full) / Percent.Full

  const formattedNumber = formatNumber({
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
    number: roundedPrice,
    ...options
  })

  if (!formattedNumber) {
    return ''
  }

  return `${formattedNumber} ₴`
}
