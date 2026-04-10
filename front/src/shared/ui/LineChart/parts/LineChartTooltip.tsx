'use client'

import { type JSX } from 'react'

import { type TooltipProps } from 'recharts'

import { formatDate } from '@/shared/lib'
import { DateFormat } from '@/shared/model'

import { type LineChartDatum } from '../LineChart'

import s from '../LineChart.module.scss'

interface LineChartTooltipPayloadItem {
  color: string
  dataKey: string
  payload: LineChartDatum
  value: number
}

type LineChartTooltipProps = TooltipProps<number, string> & {
  active?: boolean
  payload?: LineChartTooltipPayloadItem[]
}

export const LineChartTooltip = ({
  active,
  payload
}: LineChartTooltipProps): JSX.Element | null => {
  if (!active || !payload?.[0]?.payload?.name) {
    return null
  }

  return (
    <div className={s.lineChartTooltip}>
      {payload.map(item => (
        <div
          key={item.dataKey}
          className={s.lineChartTooltip__item}
          style={{
            color: item.color
          }}
        >
          <p className={s.lineChartTooltip__value}>{item.value}</p>

          <p className={s.lineChartTooltip__label}>
            {formatDate({
              date: new Date(item.payload.name),
              format: DateFormat.chartTooltip
            })}
          </p>
        </div>
      ))}
    </div>
  )
}
