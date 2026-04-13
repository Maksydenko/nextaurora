'use client'

import { type JSX, type ReactNode } from 'react'

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

import s from './SemiCircleProgress.module.scss'

import 'react-circular-progressbar/dist/styles.css'

export interface SemiCircleProgressProps {
  aspectRatio?: number
  children?: ReactNode
  value: number
}

export const SemiCircleProgress = ({
  aspectRatio = 0.56,
  children,
  value
}: SemiCircleProgressProps): JSX.Element => (
  <div className={s.semiCircleProgress}>
    <CircularProgressbar
      circleRatio={aspectRatio}
      styles={buildStyles({
        pathColor: 'var(--accent-color)',
        rotation: 0.5 + (1 - aspectRatio) / 2,
        strokeLinecap: 'butt',
        trailColor: 'var(--muted-bg)'
      })}
      value={value}
    />

    <div className={s.semiCircleProgress__body}>
      <p className={s.semiCircleProgress__text}>{value}%</p>

      {children && (
        <div className={s.semiCircleProgress__content}>{children}</div>
      )}
    </div>
  </div>
)
