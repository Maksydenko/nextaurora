import { isBrowser } from './isBrowser.const'

/** `true` when the runtime reports touch capability (coarse pointer / maxTouchPoints). */
export const isTouchScreen =
  isBrowser && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
