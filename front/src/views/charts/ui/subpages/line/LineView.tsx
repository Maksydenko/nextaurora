import { type JSX } from 'react'

import { ShellView } from '@/shared/ui'
import { LineChart } from '@/shared/ui/LineChart'

import { chartsLineBreadcrumbs, chartsLineViewData } from '../../../model'

import s from './LineView.module.scss'

export const LineView = (): JSX.Element => (
  <ShellView
    breadcrumbs={chartsLineBreadcrumbs}
    description={
      <>
        Time-series area chart built with <code>recharts</code> and date

        formatting via <code>luxon</code>.
      </>
    }
    title="Line chart"
  >
    <div className={s.lineView__container}>
      <div className={s.lineView__content}>
        <LineChart
          className={s.lineView__chart}
          data={chartsLineViewData}
          height={280}
          minWidth={0}
        />
      </div>
    </div>
  </ShellView>
)
