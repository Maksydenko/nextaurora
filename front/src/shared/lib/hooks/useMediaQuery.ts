'use client'

import { useSyncExternalStore } from 'react'

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
