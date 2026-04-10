import { type SwiperProps } from 'swiper/react'

import { type Breakpoint } from './breakpoints.interface'

interface AddBreakpointDesktop {
  (
    slidesPerView: SwiperProps['slidesPerView'],
    breakpoints: Breakpoint[]
  ): Breakpoint[]
}

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
