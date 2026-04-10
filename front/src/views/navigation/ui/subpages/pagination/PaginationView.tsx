import { type JSX } from 'react'

import { clsx } from 'clsx'

import { Card } from '@/entities/card'

import { type Locale } from '@/shared/config'
import { Pagination, ShellView } from '@/shared/ui'

import {
  paginationBreadcrumbs,
  paginationViewItems,
  paginationViewItemsPerPage,
  resolvePaginationPageFromSearchParams
} from '../../../model'

import s from './PaginationView.module.scss'

interface PaginationViewProps {
  locale: Locale
  searchParams: {
    page?: string
  }
}

export const PaginationView = ({
  locale,
  searchParams
}: PaginationViewProps): JSX.Element => {
  const total = paginationViewItems.length
  const itemsPerPage = paginationViewItemsPerPage
  const pageCount = Math.max(1, Math.ceil(total / itemsPerPage))
  const page = resolvePaginationPageFromSearchParams(
    locale,
    searchParams.page,
    pageCount
  )
  const start = (page - 1) * itemsPerPage
  const items = paginationViewItems.slice(start, start + itemsPerPage)
  const displayFrom = items.length === 0 ? 0 : (page - 1) * itemsPerPage + 1
  const displayTo =
    items.length === 0 ? 0 : Math.min(page * itemsPerPage, total)

  return (
    <ShellView
      breadcrumbs={paginationBreadcrumbs}
      description={
        <>
          URL-synced pagination built on <code>react-paginate</code>.
        </>
      }
      title="Pagination"
    >
      <div className={s.paginationView__container}>
        <div className={s.paginationView__content}>
          <div className={s.paginationView__meta}>
            <p className={s.paginationView__badge}>
              Rows {displayFrom}–{displayTo} of {total}
            </p>

            <p
              className={clsx(
                s.paginationView__badge,
                s.paginationView__badge_muted
              )}
            >
              Page {page} / {pageCount}
            </p>
          </div>

          <section aria-label="Paged cards">
            <ul className={s.paginationView__grid}>
              {items.map(item => (
                <li key={item.id}>
                  <Card
                    className={s.paginationView__card}
                    description={item.description}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
          </section>

          <div className={s.paginationView__paginationShell}>
            <Pagination
              itemsPerPage={itemsPerPage}
              itemsPerTotal={total}
              page={page}
            />
          </div>
        </div>
      </div>
    </ShellView>
  )
}
