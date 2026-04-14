import { type JSX } from 'react'

import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'
import { IndexOverview } from '@/shared/ui'

import { navigationOverviewBreadcrumbs } from '../model'

const NAVIGATION_OVERVIEW_LINKS: Option[] = [
  {
    id: 'pagination',
    label: 'Pagination',
    value: Pathname.Pagination
  }
]

export const NavigationOverview = (): JSX.Element => (
  <IndexOverview
    breadcrumbs={navigationOverviewBreadcrumbs}
    description="Section index for navigation-related demos."
    links={NAVIGATION_OVERVIEW_LINKS}
    title="Navigation"
  />
)
