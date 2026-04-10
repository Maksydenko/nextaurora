'use client'

import { type JSX } from 'react'

import { type XAxisProps } from 'recharts'

import { Breakpoint } from '@/shared/config'
import { formatDate, useMediaQuery } from '@/shared/lib'
import { DateFormat } from '@/shared/model'

import s from '../LineChart.module.scss'

type LineChartTickProps = XAxisProps & {
  payload?: {
    value: string
  }
}

export const LineChartTick = ({
  payload,
  x,
  y
}: LineChartTickProps): JSX.Element => {
  const isNarrow = useMediaQuery(Breakpoint.MD)

  return (
    <g
      className={s.lineChartTick}
      style={{
        translate: `${String(x ?? 0)}px ${String(y ?? 0)}px`
      }}
    >
      {!!payload?.value && (
        <circle
          cx={0}
          cy={isNarrow ? -2 : 6}
          fill="hsl(220 7% 92%)"
          r={isNarrow ? 3 : 4}
        />
      )}

      <text
        dy={0}
        fill="hsl(220 9% 40%)"
        textAnchor="middle"
        x={0}
        y={isNarrow ? 13 : 24}
      >
        {payload?.value
          ? formatDate({
              date: new Date(payload.value),
              format: DateFormat.chartAxis
            })
          : ''}
      </text>
    </g>
  )
}
