'use client'

import { type JSX, type ReactNode } from 'react'

import { clsx } from 'clsx'

import { type Option, useSyncBreadcrumbsToAtom } from '@/shared/model'

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'

import s from './ShellView.module.scss'

export interface ShellViewProps {
  breadcrumbs: Option[]
  children: ReactNode
  className?: string
  description: ReactNode
  title: ReactNode
}

export const ShellView = ({
  breadcrumbs,
  children,
  className,
  description,
  title
}: ShellViewProps): JSX.Element => {
  useSyncBreadcrumbsToAtom(breadcrumbs)

  return (
    <div className={clsx(s.shellView, className)}>
      <div className={s.shellView__body}>
        <div className={s.shellView__container}>
          <div className={s.shellView__content}>
            {breadcrumbs.length > 0 && (
              <Breadcrumbs
                breadcrumbs={breadcrumbs}
                className={s.shellView__breadcrumbs}
              />
            )}

            <div className={s.shellView__box}>
              <h1 className={s.shellView__title}>{title}</h1>

              <div className={s.shellView__description}>{description}</div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}
