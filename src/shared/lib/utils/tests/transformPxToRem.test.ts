/**
 * Unit tests for {@link transformPxToRem} (px to rem using root font size).
 */
import { FontSize } from '@/shared/config'

import { transformPxToRem } from '../transformPxToRem.util'

describe('transformPxToRem', () => {
  it('correct value', () => {
    expect(transformPxToRem(10)).toBe(`${10 / FontSize.Default}rem`)
  })

  it('incorrect value', () => {
    expect(transformPxToRem(NaN)).toBe('')
  })
})
