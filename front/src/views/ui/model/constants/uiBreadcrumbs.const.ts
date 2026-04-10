import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'

export const uiOverviewBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI }
]

export const uiSliderBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  { id: 'slider', label: 'Slider', value: Pathname.UISlider }
]

export const uiTableBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  { id: 'table', label: 'Table', value: Pathname.UITable }
]

export const uiSemiCircleProgressBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  {
    id: 'semiCircleProgress',
    label: 'Semi-circle progress',
    value: Pathname.UISemiCircleProgress
  }
]

export const uiTimerBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  { id: 'timer', label: 'Timer', value: Pathname.UITimer }
]

export const uiMapBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  { id: 'map', label: 'Map', value: Pathname.UIMap }
]
