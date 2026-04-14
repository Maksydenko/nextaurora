import {
  type JSX,
  type MutableRefObject,
  useCallback,
  useEffect,
  useState
} from 'react'

import { clsx } from 'clsx'
import { HiChevronDown } from 'react-icons/hi2'
import {
  type SwiperClass,
  type SwiperProps,
  type SwiperRef
} from 'swiper/react'

import { Direction, SlideDirection } from '@/shared/model'

import s from '../SliderSwiper.module.scss'

interface SliderSwiperNavProps {
  direction: Direction
  initialSlide: SwiperProps['initialSlide']
  loop: SwiperProps['loop']
  slidesLength: number
  swiperRef: MutableRefObject<SwiperRef>
}

export const SliderSwiperNav = ({
  direction,
  initialSlide,
  loop,
  slidesLength,
  swiperRef
}: SliderSwiperNavProps): JSX.Element => {
  const [isFirstSlide, setIsFirstSlide] = useState(!loop && initialSlide === 0)
  const [isLastSlide, setIsLastSlide] = useState(
    !loop && initialSlide === slidesLength - 1
  )

  const isVertical = direction === Direction.Vertical

  const updateNav = useCallback(
    ({ isBeginning, isEnd, params, slides }: SwiperClass) => {
      const isEnoughSlides = slides.length > (params.slidesPerView as number)

      setIsFirstSlide(!isEnoughSlides || isBeginning)
      setIsLastSlide(!isEnoughSlides || isEnd)
    },
    []
  )

  /**
   * When looping is off, mirrors Swiper `isBeginning` / `isEnd` into prev/next disabled state.
   *
   * @remarks Subscribes to `slideChange` only in non-loop mode; with `loop`, arrows stay enabled.
   */
  useEffect(() => {
    if (loop) {
      return
    }

    const { current: swiperElement } = swiperRef
    const swiper = swiperElement?.swiper

    if (!swiper) {
      return
    }

    updateNav(swiper)

    swiper.on('slideChange', updateNav)

    return () => {
      swiper.off('slideChange', updateNav)
    }
  }, [loop, swiperRef, updateNav])

  const slide = (slideDirection: SlideDirection) => {
    const { current: swiperElement } = swiperRef
    const swiper = swiperElement?.swiper

    const slides = {
      [SlideDirection.Next]: () => {
        swiper?.slideNext()
      },
      [SlideDirection.Prev]: () => {
        swiper?.slidePrev()
      }
    }

    slides[slideDirection]()
  }

  const getButton = (direction: SlideDirection) => {
    const isPrevDirection = direction === SlideDirection.Prev
    const isDisabled = isPrevDirection ? isFirstSlide : isLastSlide

    return (
      <button
        aria-label={
          direction === SlideDirection.Prev ? 'Previous slide' : 'Next slide'
        }
        className={clsx(
          s.sliderSwiper__button,
          s[`sliderSwiper__button_${isPrevDirection ? 'prev' : 'next'}`],
          isVertical && s.sliderSwiper__button_vertical
        )}
        disabled={isDisabled}
        type="button"
        onClick={() => {
          if (isDisabled) {
            return
          }

          slide(direction)
        }}
      >
        <HiChevronDown className={s.sliderSwiper__icon} aria-hidden />
      </button>
    )
  }

  return (
    <>
      {getButton(SlideDirection.Prev)}

      {getButton(SlideDirection.Next)}
    </>
  )
}
