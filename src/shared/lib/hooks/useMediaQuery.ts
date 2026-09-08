'use client'

import { useSyncExternalStore } from 'react'

/**
 * Tracks whether a CSS media query matches, backed by `useSyncExternalStore`.
 *
 * @param valuePx - Width in pixels embedded into the query (e.g. `1024` for `max-width: 1024px`).
 * @param mediaFeature - Feature name used before the colon, default `max-width`.
 * @returns `true` when the query matches on the client; server snapshot is always `false`.
 *
 * @remarks Client-only meaningful; pair with `'use client'` at the call site.
 */
export const useMediaQuery = (
  valuePx: number,
  mediaFeature = 'max-width'
): boolean => {
  const mediaQuery = `(${mediaFeature}: ${valuePx}px)`

  return useSyncExternalStore(
    onStoreChange => {
      const mediaQueryList = window.matchMedia(mediaQuery)
      mediaQueryList.addEventListener('change', onStoreChange)

      return () => {
        mediaQueryList.removeEventListener('change', onStoreChange)
      }
    },
    () => window.matchMedia(mediaQuery).matches,
    () => false
  )
}
