'use client'

import { useEffect, useState } from 'react'

/**
 * Reports whether the component tree has completed the first client-side commit after hydration.
 *
 * @returns `false` during SSR and the first render, then `true` after mount.
 *
 * @remarks Common pattern to gate client-only UI or measurements that depend on `window`.
 */
export const useMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false)

  /**
   * Flips the flag after the first effect run on the client.
   */
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}
