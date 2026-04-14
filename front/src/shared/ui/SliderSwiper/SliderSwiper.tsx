'use client'

import { type JSX, type ReactNode, useEffect, useRef } from 'react'

import { clsx } from 'clsx'
// import Swiper core and required modules
import { A11y, Keyboard, Navigation, Pagination, Virtual } from 'swiper/modules'
// Import Swiper React components
import { Swiper, type SwiperProps, SwiperSlide } from 'swiper/react'

import { Direction, type Option } from '@/shared/model'

import { useBullets } from './useBullets'

import { type Breakpoints } from './breakpoints.interface'

import { SliderSwiperNav } from './parts'

import s from './SliderSwiper.module.scss'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/virtual'

export interface SliderSwiperProps extends SwiperProps {
  breakpoints?: Breakpoints
  direction?: SwiperProps['direction']
  hash?: string
  isNav?: boolean
  keyboardEnabled?: boolean
  keyboardOnlyInViewport?: boolean
  keyboardPageUpDown?: boolean
  paginationClickable?: boolean
  paginationDynamicBullets?: boolean
  paginationType?: 'bullets' | 'fraction' | 'progressbar'
  slides: Option<ReactNode>[]
}

export const SliderSwiper = ({
  autoplay,
  breakpoints,
  className,
  direction = Direction.Horizontal,
  hash,
  initialSlide,
  isNav = true,
  keyboard = {
    pageUpDown: false
  },
  loop,
  pagination = {
    clickable: true,
    enabled: true,
    type: 'bullets'
  },
  slides,
  slidesPerView,
  virtual,
  ...props
}: SliderSwiperProps): JSX.Element => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const swiperRef = useRef<any>(null)

  const { length: slidesLength } = slides

  const hasBulletsLayout = useBullets({
    breakpoints,
    slidesLength,
    slidesPerView
  })

  const hasBullets =
    (pagination === true ||
      (typeof pagination === 'object' && pagination.type === 'bullets')) &&
    hasBulletsLayout

  /**
   * Sets `tabIndex={-1}` on slide descendants so keyboard focus stays on navigation controls.
   *
   * @remarks Runs once after Swiper mounts; depends on `swiperRef` being populated by the instance.
   */
  useEffect(() => {
    const swiperElement = swiperRef?.current

    if (!swiperElement?.swiper) {
      return
    }

    swiperElement.querySelectorAll('*').forEach((el: Element) => {
      el.setAttribute('tabIndex', '-1')
    })
  }, [])

  /**
   * Starts or stops Swiper autoplay when the `autoplay` prop changes.
   *
   * @remarks No-ops if the autoplay controller is not present on the instance.
   */
  useEffect(() => {
    const swiperAutoplay = swiperRef?.current.swiper.autoplay

    if (!swiperAutoplay) {
      return
    }

    if (autoplay) {
      swiperAutoplay.start()
    } else {
      swiperAutoplay.stop()
    }
  }, [autoplay])

  const slideItems = slides.map(({ label, value }, i) => (
    <SwiperSlide
      key={label}
      {...(hash && {
        'data-hash': `${hash}${label}`
      })}
      {...(virtual && {
        virtualIndex: i
      })}
    >
      {value}
    </SwiperSlide>
  ))

  return (
    <div
      className={clsx(
        s.sliderSwiper,
        hasBullets && s.sliderSwiper_bullets,
        className
      )}
    >
      <div className={s.sliderSwiper__body}>
        <Swiper
          ref={swiperRef}
          breakpoints={breakpoints}
          className={s.sliderSwiper__swiper}
          direction={direction}
          keyboard={keyboard}
          modules={[A11y, Keyboard, Navigation, Pagination, Virtual]}
          pagination={pagination}
          {...props}
        >
          {slideItems}
        </Swiper>

        {isNav && (
          <SliderSwiperNav
            direction={direction}
            initialSlide={initialSlide}
            loop={loop}
            slidesLength={slidesLength}
            swiperRef={swiperRef}
          />
        )}
      </div>
    </div>
  )
}
