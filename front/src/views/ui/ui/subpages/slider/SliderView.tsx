'use client'

import { type JSX, type ReactNode, useMemo } from 'react'

import { Card } from '@/entities/card'

import { type Option } from '@/shared/model'
import { ShellView,SliderSwiper } from '@/shared/ui'

import { uiSliderBreadcrumbs, uiSliderSlides } from '../../../model'

import s from './SliderView.module.scss'

export const SliderView = (): JSX.Element => {
  const slides = useMemo<Option<ReactNode>[]>(
    () =>
      uiSliderSlides.map(item => ({
        id: item.id,
        label: item.id,
        value: (
          <Card
            className={s.sliderView__card}
            description={item.description}
            title={item.title}
          />
        )
      })),
    []
  )

  return (
    <ShellView
      breadcrumbs={uiSliderBreadcrumbs}
      description={
        <>Swipeable slider built on <code>swiper</code>.</>
      }
      title="Slider"
    >
      <div className={s.sliderView__container}>
        <div className={s.sliderView__slider}>
          <SliderSwiper
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 }
            }}
            slides={slides}
            slidesPerView={1}
            grabCursor
            isNav
          />
        </div>
      </div>
    </ShellView>
  )
}
