'use client'

import { useCallback, useState } from 'react'

import { useWindowListener } from './useWindowListener'

/**
 * Whether the page has been scrolled past a vertical offset.
 *
 * @param breakpoint - Scroll position in pixels (`window.scrollY`) that toggles the flag to `true`.
 * @returns `true` when `scrollY` is greater than `breakpoint`, otherwise `false`.
 *
 * @remarks Listens to `scroll` through `useWindowListener`.
 */
export const useActiveOnScroll = (breakpoint: number): boolean => {
  const [isActive, setIsActive] = useState(false)

  const handleActiveOnScroll = useCallback(() => {
    const isMoreBreakpoint = window.scrollY > breakpoint

    if (isMoreBreakpoint) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [breakpoint])
  useWindowListener('scroll', handleActiveOnScroll)

  return isActive
}
