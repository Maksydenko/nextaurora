'use client'

import { type JSX, useEffect, useMemo, useState } from 'react'

import { clsx } from 'clsx'
import { useTimer } from 'react-timer-hook'

import s from './Timer.module.scss'

export interface TimerLabels {
  day: string
  hour: string
  minute: string
  second: string
}

type UseTimerOptions = Parameters<typeof useTimer>[0]

const DEFAULT_LABELS: TimerLabels = {
  day: 'd',
  hour: 'h',
  minute: 'm',
  second: 's'
}

export type TimerProps = UseTimerOptions & {
  className?: string
  labels?: Partial<TimerLabels>
}

/**
 * Countdown display built on `react-timer-hook`, with optional label overrides.
 *
 * @remarks Forwards timer options to `useTimer`. Default labels are short unit suffixes (`d`, `h`, `m`, `s`).
 */
export const Timer = ({
  className,
  labels: labelsProp,
  ...timerProps
}: TimerProps): JSX.Element => {
  const [isClient, setIsClient] = useState(false)
  const labels = useMemo(
    () => ({ ...DEFAULT_LABELS, ...labelsProp }),
    [labelsProp]
  )

  const { days, hours, minutes, seconds } = useTimer({
    ...timerProps
  })

  /**
   * Defers rendering live countdown values until after mount.
   *
   * @remarks `react-timer-hook` output differs between SSR and CSR; gating avoids a hydration mismatch.
   */
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={clsx(className, s.timer)}>
      <div className={s.timer__body}>
        {isClient && (
          <>
            <div className={s.timer__count}>
              <p className={s.timer__value}>{days}</p>

              <p className={s.timer__label}>{labels.day}</p>
            </div>

            <div className={s.timer__count}>
              <p className={s.timer__value}>{hours}</p>

              <p className={s.timer__label}>{labels.hour}</p>
            </div>

            <div className={s.timer__count}>
              <p className={s.timer__value}>{minutes}</p>

              <p className={s.timer__label}>{labels.minute}</p>
            </div>

            <div className={s.timer__count}>
              <p className={s.timer__value}>{seconds}</p>

              <p className={s.timer__label}>{labels.second}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
