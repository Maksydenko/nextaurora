'use client'

import { type JSX } from 'react'

import { clsx } from 'clsx'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  type ResponsiveContainerProps,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { LineChartTick, LineChartTooltip } from './parts'

import s from './LineChart.module.scss'

const CHART_MAIN_COLOR = 'var(--accentColor)'
const CHART_SECONDARY_COLOR = 'var(--mutedColor)'
const CHART_DOT_RING_COLOR = 'var(--mainBgColor)'

const CHART_AREA_GRADIENTS = [
  {
    id: 'lineChartMain',
    stopColor: CHART_MAIN_COLOR
  },
  {
    id: 'lineChartAdditional',
    stopColor: CHART_SECONDARY_COLOR
  }
] as const

const CHART_AREA_GRADIENT_STOPS = [
  {
    offset: '0%',
    stopOpacity: 0.4
  },
  {
    offset: '100%',
    stopOpacity: 0
  }
] as const

export interface LineChartDatum {
  additional?: number
  main: number
  name: string
}

export interface LineChartProps extends Omit<
  ResponsiveContainerProps,
  'children'
> {
  data: LineChartDatum[]
}

export const LineChart = ({
  className,
  data,
  height = 200,
  ...props
}: LineChartProps): JSX.Element => {
  const generateExtendedData = (source: LineChartDatum[]) => {
    const [firstPoint] = source
    const lastPoint = source[source.length - 1]

    const extendedStart: LineChartDatum = {
      main: firstPoint.main / 2,
      name: '',
      ...(firstPoint?.additional !== undefined && {
        additional: firstPoint.additional / 2
      })
    }

    const extendedEnd: LineChartDatum = {
      main: lastPoint.main,
      name: '',
      ...(lastPoint?.additional !== undefined && {
        additional: lastPoint.additional * 2
      })
    }

    return [extendedStart, ...source, extendedEnd]
  }

  const extendedData = generateExtendedData(data)

  return (
    <ResponsiveContainer
      className={clsx(className, s.lineChart)}
      height={height}
      {...props}
    >
      <AreaChart
        data={extendedData}
        margin={{
          bottom: 5,
          left: -20,
          right: 0,
          top: 20
        }}
      >
        <defs>
          {CHART_AREA_GRADIENTS.map(({ id, stopColor }) => (
            <linearGradient key={id} id={id} x1="0" x2="0" y1="0" y2="1">
              {CHART_AREA_GRADIENT_STOPS.map(({ offset, stopOpacity }) => (
                <stop
                  key={offset}
                  offset={offset}
                  stopColor={stopColor}
                  stopOpacity={stopOpacity}
                />
              ))}
            </linearGradient>
          ))}
        </defs>

        <CartesianGrid horizontal={false} />

        <XAxis
          className={s.lineChart__xAxis}
          dataKey="name"
          tick={<LineChartTick />}
        />

        <YAxis className={s.lineChart__yAxis} />

        <Tooltip
          content={<LineChartTooltip />}
          cursor={false}
          position={{
            y: 0
          }}
        />

        <Area
          activeDot={({ cx, cy, index }) => {
            const isFirstOrLast =
              index === 0 || index === extendedData.length - 1

            if (isFirstOrLast) {
              return null
            }

            return (
              <circle
                cx={cx}
                cy={cy}
                fill={CHART_MAIN_COLOR}
                r={10}
                stroke={CHART_DOT_RING_COLOR}
                strokeWidth={5}
              />
            )
          }}
          dataKey="main"
          fill="url(#lineChartMain)"
          stroke={CHART_MAIN_COLOR}
          strokeWidth={5}
          type="monotone"
        />

        {data[0]?.additional !== undefined && (
          <Area
            activeDot={({ cx, cy, index }) => {
              const isFirstOrLast =
                index === 0 || index === extendedData.length - 1

              if (isFirstOrLast) {
                return null
              }

              return (
                <circle
                  cx={cx}
                  cy={cy}
                  fill={CHART_SECONDARY_COLOR}
                  r={10}
                  stroke={CHART_DOT_RING_COLOR}
                  strokeWidth={5}
                />
              )
            }}
            dataKey="additional"
            fill="url(#lineChartAdditional)"
            stroke={CHART_SECONDARY_COLOR}
            strokeWidth={5}
            type="monotone"
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  )
}
