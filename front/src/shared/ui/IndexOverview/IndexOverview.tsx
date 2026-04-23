'use client'

import type { JSX, ReactNode } from 'react'

import { clsx } from 'clsx'

import { type Option, useSyncBreadcrumbsToAtom } from '@/shared/model'

import { Link } from '@/i18n/navigation'

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'

import s from './IndexOverview.module.scss'

export interface IndexOverviewProps {
  breadcrumbs: Option[]
  className?: string
  description: ReactNode
  links: Option[]
  title: ReactNode
}

export const IndexOverview = ({
  breadcrumbs,
  className,
  description,
  links,
  title
}: IndexOverviewProps): JSX.Element => {
  useSyncBreadcrumbsToAtom(breadcrumbs)

  return (
    <div className={clsx(s.indexOverview, className)}>
      <div className={s.indexOverview__container}>
        <div className={s.indexOverview__body}>
          <div className={s.indexOverview__content}>
            {breadcrumbs.length > 0 && (
              <Breadcrumbs
                breadcrumbs={breadcrumbs}
                className={s.indexOverview__breadcrumbs}
              />
            )}

            <div className={s.indexOverview__box}>
              <h1 className={s.indexOverview__title}>{title}</h1>

              <p className={s.indexOverview__description}>{description}</p>
            </div>
          </div>

          <ul className={s.indexOverview__list}>
            {links.map(({ id, label, value }) => (
              <li key={id} className={s.indexOverview__item}>
                <Link className={s.indexOverview__link} href={value}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
