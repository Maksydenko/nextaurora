import { type JSX } from 'react'

import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'
import { IndexOverview } from '@/shared/ui'

import { Link } from '@/i18n/navigation'

import { uiOverviewBreadcrumbs } from '../model'

const UI_OVERVIEW_LINKS: Option[] = [
  {
    id: 'map',
    label: 'Map',
    value: Pathname.UIMap
  },
  {
    id: 'semiCircleProgress',
    label: 'Semi-circle progress',
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

export const UiOverview = (): JSX.Element => (
  <IndexOverview
    breadcrumbs={uiOverviewBreadcrumbs}
    description={
      <>
        Shared components demos backed by mock data. See also{' '}

        <Link href={Pathname.Charts}>Charts</Link>.
      </>
    }
    links={UI_OVERVIEW_LINKS}
    title="UI"
  />
)
