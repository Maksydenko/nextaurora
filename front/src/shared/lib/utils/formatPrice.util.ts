import { Percent } from '@/shared/model'

import { formatNumber } from './formatNumber.util'

interface FormatPriceOptions extends Intl.NumberFormatOptions {
  price: number
}

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
