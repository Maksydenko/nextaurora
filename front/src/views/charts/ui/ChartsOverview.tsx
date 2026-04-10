import { type JSX } from 'react'

import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'
import { IndexOverview } from '@/shared/ui'

import { chartsOverviewBreadcrumbs } from '../model'

const CHARTS_OVERVIEW_LINKS: Option[] = [
  { id: 'line', label: 'Line chart', value: Pathname.ChartsLine }
]

export const ChartsOverview = (): JSX.Element => (
  <IndexOverview
    breadcrumbs={chartsOverviewBreadcrumbs}
    description="Data visualization demos using shared UI building blocks."
    links={CHARTS_OVERVIEW_LINKS}
    title="Charts"
  />
)
