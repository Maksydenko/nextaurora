import type { JSX } from 'react'

import { SemiCircleProgress, ShellView } from '@/shared/ui'

import { uiSemiCircleProgressBreadcrumbs } from '../../../model'

import s from './SemiCircleProgressView.module.scss'

export const SemiCircleProgressView = (): JSX.Element => (
  <ShellView
    breadcrumbs={uiSemiCircleProgressBreadcrumbs}
    description={
      <>
        Semi-circle progress indicator built on{' '}

        <code>react-circular-progressbar</code>.
      </>
    }
    title="Semi-circle progress"
  >
    <div className={s.semiCircleProgressView__container}>
      <div className={s.semiCircleProgressView__stage}>
        <SemiCircleProgress value={80}>
          <p>Completion</p>
        </SemiCircleProgress>
      </div>
    </div>
  </ShellView>
)
