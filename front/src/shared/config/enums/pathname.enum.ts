import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const Pathname = {
  Charts: '/charts',
  ChartsLine: '/charts/line',
  Forms: '/forms',
  FormsInput: '/forms/input',
  FormsPhone: '/forms/phone',
  Home: '/',
  Navigation: '/navigation',
  Pagination: '/navigation/pagination',
  UI: '/ui',
  UIMap: '/ui/map',
  UISemiCircleProgress: '/ui/semi-circle-progress',
  UISlider: '/ui/slider',
  UITable: '/ui/table',
  UITimer: '/ui/timer'
} as const
export type Pathname = ValueOf<typeof Pathname>
