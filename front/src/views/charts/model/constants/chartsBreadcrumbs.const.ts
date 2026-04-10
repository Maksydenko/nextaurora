import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'

export const chartsOverviewBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'charts', label: 'Charts', value: Pathname.Charts }
]

export const chartsLineBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'charts', label: 'Charts', value: Pathname.Charts },
  { id: 'line', label: 'Line chart', value: Pathname.ChartsLine }
]
