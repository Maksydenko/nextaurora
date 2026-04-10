'use client'

import { type JSX, useMemo } from 'react'

import { ShellView,Timer } from '@/shared/ui'

import { uiTimerBreadcrumbs } from '../../../model'

import s from './TimerView.module.scss'

export const TimerView = (): JSX.Element => {
  const expiryTimestamp = useMemo(() => {
    const t = new Date()
    t.setHours(t.getHours() + 26)

    return t
  }, [])

  return (
    <ShellView
      breadcrumbs={uiTimerBreadcrumbs}
      description={
        <>
          Countdown component powered by <code>react-timer-hook</code> with live
          client-side ticks.
        </>
      }
      title="Timer"
    >
      <div className={s.timerView__container}>
        <Timer
          expiryTimestamp={expiryTimestamp}
          labels={{
            day: 'd',
            hour: 'h',
            minute: 'm',
            second: 's'
          }}
        />
      </div>
    </ShellView>
  )
}
