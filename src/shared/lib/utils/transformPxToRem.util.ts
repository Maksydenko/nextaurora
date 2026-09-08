import { FontSize } from '@/shared/config'

/**
 * Converts a pixel length to a `rem` string using the app default root font size.
 *
 * @param px - Length in CSS pixels.
 * @returns `rem` string (e.g. `"1rem"`), or empty when `px` is `NaN`.
 */
export const transformPxToRem = (px: number): string => {
  if (Number.isNaN(px)) {
    return ''
  }

  return `${px / FontSize.Default}rem`
}
