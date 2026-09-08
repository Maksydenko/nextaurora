import { Pathname } from '@/shared/config'
import type { Option } from '@/shared/model'

/**
 * Breadcrumb trail for the charts overview demo page.
 */
export const chartsOverviewBreadcrumbs: Option[] = [
  {
    id: 'home',
    label: 'Home',
    value: Pathname.Home
  },
  {
    id: 'charts',
    label: 'Charts',
    value: Pathname.Charts
  }
]

/**
 * Breadcrumb trail for the line chart subpage.
 */
export const chartsLineBreadcrumbs: Option[] = [
  {
    id: 'home',
    label: 'Home',
    value: Pathname.Home
  },
  {
    id: 'charts',
    label: 'Charts',
    value: Pathname.Charts
  },
  {
    id: 'line',
    label: 'Line chart',
    value: Pathname.ChartsLine
  }
]
