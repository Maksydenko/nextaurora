import { Pathname } from '@/shared/config'
import type { Option } from '@/shared/model'

/**
 * Nested sidebar navigation groups for the app chrome.
 */
export const sidebarNavGroups: Option<Option[]>[] = [
  {
    id: 'charts',
    label: 'Charts',
    value: [
      {
        id: 'line',
        label: 'Line chart',
        value: Pathname.ChartsLine
      }
    ]
  },
  {
    id: 'forms',
    label: 'Forms',
    value: [
      {
        id: 'input',
        label: 'Input',
        value: Pathname.FormsInput
      },
      {
        id: 'phone',
        label: 'Phone',
        value: Pathname.FormsPhone
      }
    ]
  },
  {
    id: 'navigation',
    label: 'Navigation',
    value: [
      {
        id: 'pagination',
        label: 'Pagination',
        value: Pathname.Pagination
      }
    ]
  },
  {
    id: 'ui',
    label: 'UI',
    value: [
      {
        id: 'map',
        label: 'Map',
        value: Pathname.UIMap
      },
      {
        id: 'semiCircleProgress',
        label: 'Semi-circle',
        value: Pathname.UISemiCircleProgress
      },
      {
        id: 'slider',
        label: 'Slider',
        value: Pathname.UISlider
      },
      {
        id: 'table',
        label: 'Table',
        value: Pathname.UITable
      },
      {
        id: 'timer',
        label: 'Timer',
        value: Pathname.UITimer
      }
    ]
  }
]
