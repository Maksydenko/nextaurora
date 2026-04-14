import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'

/** Breadcrumb trail for the UI components overview page. */
export const uiOverviewBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI }
]

/** Breadcrumb trail for the slider demo subpage. */
export const uiSliderBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  { id: 'slider', label: 'Slider', value: Pathname.UISlider }
]

/** Breadcrumb trail for the table demo subpage. */
export const uiTableBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  { id: 'table', label: 'Table', value: Pathname.UITable }
]

/** Breadcrumb trail for the semi-circle progress demo subpage. */
export const uiSemiCircleProgressBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  {
    id: 'semiCircleProgress',
    label: 'Semi-circle progress',
    value: Pathname.UISemiCircleProgress
  }
]

/** Breadcrumb trail for the timer demo subpage. */
export const uiTimerBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  { id: 'timer', label: 'Timer', value: Pathname.UITimer }
]

/** Breadcrumb trail for the map demo subpage. */
export const uiMapBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'ui', label: 'UI', value: Pathname.UI },
  { id: 'map', label: 'Map', value: Pathname.UIMap }
]
