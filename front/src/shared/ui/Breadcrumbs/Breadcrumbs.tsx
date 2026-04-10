'use client'

import { type JSX } from 'react'

import { clsx } from 'clsx'
import { HiChevronRight } from 'react-icons/hi2'

import { type Option } from '@/shared/model'

import { Link } from '@/i18n/navigation'

import s from './Breadcrumbs.module.scss'

export interface BreadcrumbsProps {
  breadcrumbs: Option[]
  className?: string
}

export const Breadcrumbs = ({
  breadcrumbs,
  className
}: BreadcrumbsProps): JSX.Element => (
  <nav aria-label="Breadcrumb" className={clsx(s.breadcrumbs, className)}>
    <ul className={s.breadcrumbs__list}>
      {breadcrumbs.map((crumb, i) => {
        const isLast = i === breadcrumbs.length - 1

        if (isLast) {
          return (
            <li
              key={crumb.id}
              aria-current="page"
              className={clsx(s.breadcrumbs__item, s.breadcrumbs__item_current)}
            >
              <p className={s.breadcrumbs__current}>{crumb.label}</p>
            </li>
          )
        }

        return (
          <li key={crumb.id} className={s.breadcrumbs__item}>
            <Link className={s.breadcrumbs__link} href={crumb.value}>
              {crumb.label}
            </Link>

            <HiChevronRight className={s.breadcrumbs__chevron} aria-hidden />
          </li>
        )
      })}
    </ul>
  </nav>
)
