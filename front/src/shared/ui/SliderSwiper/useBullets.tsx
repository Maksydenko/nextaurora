import { type SwiperProps } from 'swiper/react'

import { addBreakpointDesktop } from './addBreakpointDesktop.util'

import { type Breakpoint, type Breakpoints } from './breakpoints.interface'

interface UseBulletsParams {
  breakpoints?: Breakpoints
  slidesLength: number
  slidesPerView: SwiperProps['slidesPerView']
}

/**
 * Whether bullet-style pagination should be enabled for the current slide count and breakpoints.
 *
 * @param breakpoints - Optional Swiper breakpoints map; if omitted, only `slidesPerView` vs `slidesLength` is compared.
 * @param slidesLength - Number of slides in the carousel.
 * @param slidesPerView - Base `slidesPerView` when no breakpoints apply (default `1`).
 * @returns `true` if any active configuration shows fewer slides than `slidesLength`.
 */
export const useBullets = ({
  breakpoints,
  slidesLength,
  slidesPerView = 1
}: UseBulletsParams): boolean => {
  if (!breakpoints) {
    if (+slidesPerView < slidesLength) {
      return true
    }

    return false
  }

  const breakpointsArray: Breakpoint[] = Object.entries(breakpoints).map(
    ([, { isBreakpoint, slidesPerView: slides }]) => ({
      isBreakpoint,
      slides
    })
  )

  const breakpointsWithDesktop = addBreakpointDesktop(
    slidesPerView,
    breakpointsArray
  )

  const results = breakpointsWithDesktop.map(breakpoint => {
    const { isBreakpoint, slides } = breakpoint

    if (isBreakpoint && Number(slides) < slidesLength) {
      return true
    }

    return false
  })

  return results.includes(true)
}
