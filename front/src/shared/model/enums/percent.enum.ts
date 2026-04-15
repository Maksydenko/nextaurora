import { type ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Common percentage constants for layout, charts, and math helpers.
 */
export const Percent = {
  Fifth: 20,
  FourFifths: 80,
  Full: 100,
  Half: 50,
  Hundredth: 1,
  NineTenths: 90,
  Quarter: 25,
  Tenth: 10,
  Third: 33.333,
  Thousandth: 0.1,
  ThreeFifths: 60,
  Twentieth: 5,
  TwoFifths: 40,
  TwoThirds: 66.666
} as const
export type Percent = ValueOf<typeof Percent>
