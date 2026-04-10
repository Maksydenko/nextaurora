import { DateTime } from 'luxon'

import { Locale } from '@/shared/config'
import { DateFormat } from '@/shared/model'

interface FormatDateOptions {
  date: Date
  format?: DateFormat
  locale?: string
}

export const formatDate = ({
  date,
  format = DateFormat.ddDDyyyy,
  locale = Locale.Default
}: FormatDateOptions): string =>
  DateTime.fromISO(date.toISOString(), {
    locale
  }).toFormat(format)
