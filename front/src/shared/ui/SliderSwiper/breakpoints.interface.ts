import { type SwiperProps } from 'swiper/react'

export interface Breakpoint {
  isBreakpoint: boolean | undefined
  slides: SwiperProps['slidesPerView']
}

export interface Breakpoints {
  [ratio: string]: BreakpointsValue
  [width: number]: BreakpointsValue
}

interface BreakpointsValue extends SwiperProps {
  isBreakpoint?: boolean
}
