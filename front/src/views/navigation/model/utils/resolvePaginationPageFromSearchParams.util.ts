import { type Locale, Pathname } from '@/shared/config'

import { redirect } from '@/i18n/navigation'

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
    redirect({ href: Pathname.Pagination, locale })
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
