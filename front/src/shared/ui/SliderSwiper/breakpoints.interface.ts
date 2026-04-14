import { type SwiperProps } from 'swiper/react'

/**
 * Normalized Swiper breakpoint entry after resolving active flag and slide count.
 */
export interface Breakpoint {
  isBreakpoint: boolean | undefined
  slides: SwiperProps['slidesPerView']
}

/**
 * Swiper `breakpoints` map: numeric keys are min-widths in px; string keys are width ratios.
 */
export interface Breakpoints {
  [ratio: string]: BreakpointsValue
  [width: number]: BreakpointsValue
}

/** Per-breakpoint Swiper options plus optional active flag used when flattening configs. */
interface BreakpointsValue extends SwiperProps {
  isBreakpoint?: boolean
}
