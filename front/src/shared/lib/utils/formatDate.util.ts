import { DateTime } from 'luxon'

import { Locale } from '@/shared/config'
import { DateFormat } from '@/shared/model'

interface FormatDateOptions {
  date: Date
  format?: DateFormat
  locale?: string
}

/**
 * Formats a `Date` with Luxon using a project date pattern and locale.
 *
 * @param date - JavaScript `Date` instance.
 * @param format - Luxon format token string; defaults to `DateFormat.ddDDyyyy`.
 * @param locale - Luxon locale id; defaults to `Locale.Default`.
 * @returns Formatted date string.
 */
export const formatDate = ({
  date,
  format = DateFormat.ddDDyyyy,
  locale = Locale.Default
}: FormatDateOptions): string =>
  DateTime.fromISO(date.toISOString(), {
    locale
  }).toFormat(format)
