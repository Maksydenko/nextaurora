import type { SwiperProps } from 'swiper/react'

import type { Breakpoint } from './breakpoints.interface'

interface AddBreakpointDesktop {
  (
    slidesPerView: SwiperProps['slidesPerView'],
    breakpoints: Breakpoint[]
  ): Breakpoint[]
}

/**
 * Prepends a synthetic “desktop” breakpoint and shifts slide counts for Swiper breakpoint math.
 *
 * @param slidesPerView - Base slides-per-view used for the widest synthetic step.
 * @param breakpoints - Mutable array of breakpoint descriptors; first entry is duplicated at the front.
 * @returns The same array reference after in-place mutation.
 *
 * @remarks Mutates `breakpoints` via `unshift` and a forward pass.
 */
export const addBreakpointDesktop: AddBreakpointDesktop = (
  slidesPerView,
  breakpoints
) => {
  const firstBreakpoint = breakpoints[0]
  const newObject = {
    isBreakpoint: true,
    slides: firstBreakpoint.slides
  }
  breakpoints.unshift(newObject)

  for (let i = 1; i < breakpoints.length; i++) {
    breakpoints[i].slides = breakpoints[i + 1]
      ? breakpoints[i + 1].slides
      : slidesPerView
  }

  return breakpoints
}
