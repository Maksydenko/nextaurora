import { FontSize } from '@/shared/config'

export const transformPxToRem = (px: number): string => {
  if (Number.isNaN(px)) {
    return ''
  }

  return `${px / FontSize.Default}rem`
}
