import { type KeyboardEvent } from 'react'

interface HandleArrowFocusOptions {
  event: KeyboardEvent<HTMLElement>
  isLoop?: boolean
  isRtl?: boolean
  isVertical?: boolean
  selector: string
}

/**
 * Moves focus between focusable elements on ArrowUp/Down or ArrowLeft/Right key presses.
 *
 * @param event - Keyboard event from the currently focused element.
 * @param isLoop - When `true`, wraps from last to first (and vice versa).
 * @param isRtl - Swaps previous/next direction for horizontal navigation.
 * @param isVertical - Uses up/down arrows instead of left/right.
 * @param selector - CSS selector matching all focusable items in the group.
 */
export const handleArrowFocus = ({
  event,
  isLoop,
  isRtl,
  isVertical,
  selector
}: HandleArrowFocusOptions): void => {
  const { currentTarget, key } = event

  const isPrevKey = key === (isVertical ? 'ArrowUp' : 'ArrowLeft')
  const isNextKey = key === (isVertical ? 'ArrowDown' : 'ArrowRight')

  if (!isPrevKey && !isNextKey) {
    return
  }

  event.preventDefault()

  const movePrev = isRtl ? isNextKey : isPrevKey
  const moveNext = isRtl ? isPrevKey : isNextKey

  const allFocusable = Array.from(
    document.querySelectorAll<HTMLElement>(selector)
  )
  const currentIndex = allFocusable.indexOf(currentTarget as HTMLElement)

  if (currentIndex === -1) {
    return
  }

  let nextIndex = -1

  if (movePrev) {
    if (currentIndex > 0) {
      nextIndex = currentIndex - 1
    } else if (isLoop) {
      nextIndex = allFocusable.length - 1
    }
  }

  if (moveNext) {
    if (currentIndex < allFocusable.length - 1) {
      nextIndex = currentIndex + 1
    } else if (isLoop) {
      nextIndex = 0
    }
  }

  if (nextIndex === -1) {
    return
  }

  allFocusable[nextIndex].focus()
}
