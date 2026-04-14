import { type UiSliderSlideContent } from '../interfaces/uiSliderSlideContent.interface'

/** Placeholder slides for the Swiper UI showcase. */
export const uiSliderSlides: UiSliderSlideContent[] = Array.from(
  { length: 8 },
  (_, index) => {
    const n = index + 1

    return {
      description:
        'Synthetic row for URL-driven paging, layout checks, and responsive cards.',
      id: `slide-${String(n).padStart(2, '0')}`,
      title: `Card ${String(n).padStart(2, '0')}`
    }
  }
)
