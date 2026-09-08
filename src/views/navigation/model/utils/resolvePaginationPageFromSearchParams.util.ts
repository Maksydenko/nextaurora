import { type Locale, Pathname } from '@/shared/config'

import { redirect } from '@/i18n/navigation'

/**
 * Parses the `page` search param into a bounded page index, redirecting on invalid or out-of-range values.
 *
 * @param locale - Active locale passed through to `redirect`.
 * @param pageParam - Raw `page` query value; treated as page `1` when `undefined`.
 * @param pageCount - Maximum valid page number.
 * @returns One-based page index within `[1, pageCount]`.
 *
 * @remarks Never returns on bad input: triggers `redirect` instead.
 */
export const resolvePaginationPageFromSearchParams = (
  locale: Locale,
  pageParam: string | undefined,
  pageCount: number
): number => {
  if (pageParam === undefined) {
    return 1
  }

  const rawPage = Number(pageParam)

  if (!Number.isFinite(rawPage) || rawPage < 1) {
    redirect({
      href: Pathname.Pagination,
      locale
    })
  }

  const floored = Math.floor(rawPage)
  const clamped = Math.min(floored, pageCount)

  if (floored !== clamped) {
    redirect({
      href: {
        pathname: Pathname.Pagination,
        query:
          clamped > 1
            ? {
                page: String(clamped)
              }
            : {}
      },
      locale
    })
  }

  return clamped
}
