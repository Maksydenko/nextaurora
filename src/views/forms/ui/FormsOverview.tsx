import type { JSX } from 'react'

import { Pathname } from '@/shared/config'
import type { Option } from '@/shared/model'
import { IndexOverview } from '@/shared/ui'

import { formsOverviewBreadcrumbs } from '../model'

const FORMS_OVERVIEW_LINKS: Option[] = [
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

export const FormsOverview = (): JSX.Element => (
  <IndexOverview
    breadcrumbs={formsOverviewBreadcrumbs}
    description={
      <>
        Demos for <code>shared/ui</code> form controls.
      </>
    }
    links={FORMS_OVERVIEW_LINKS}
    title="Forms"
  />
)
