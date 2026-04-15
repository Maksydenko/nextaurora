'use client'

import type { JSX } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import { clsx } from 'clsx'
import { HiChevronDown } from 'react-icons/hi2'
import ReactPaginate, { type ReactPaginateProps } from 'react-paginate'

import { sortSearchParams } from '@/shared/lib'

import s from './Pagination.module.scss'

interface PaginationProps extends Omit<ReactPaginateProps, 'pageCount'> {
  className?: string
  itemsPerPage: number
  itemsPerTotal: number
  /**
   * 1-based page from the server (keeps pager in sync with RSC after redirects).
   */
  page?: number
  pageRangeDisplayed?: number
}

const PAGE_PARAM = 'page'

export const Pagination = ({
  className,
  itemsPerPage,
  itemsPerTotal,
  page: pageFromServer,
  pageRangeDisplayed = 1,
  ...rest
}: PaginationProps): JSX.Element => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const pageParam = searchParams.get(PAGE_PARAM)

  const pageFromUrl = Number(pageParam) || 1
  const page = pageFromServer ?? pageFromUrl
  const forcePage = page - 1
  const pageCount = Math.ceil(itemsPerTotal / itemsPerPage)

  const handlePageChange: ReactPaginateProps['onPageChange'] = ({
    selected
  }) => {
    const page = ++selected
    const params = new URLSearchParams(String(searchParams))

    if (page === 1) {
      params.delete(PAGE_PARAM)
    } else {
      params.set(PAGE_PARAM, String(page))
    }

    push(`?${sortSearchParams(params)}`)
  }

  return (
    <ReactPaginate
      activeClassName={s.pagination__active}
      activeLinkClassName={s.pagination__activeLink}
      breakClassName={s.pagination__break}
      breakLabel="..."
      breakLinkClassName={s.pagination__breakLink}
      className={clsx(s.pagination, className)}
      disabledClassName={s.pagination__disabled}
      disabledLinkClassName={s.pagination__disabledLink}
      forcePage={forcePage}
      nextAriaLabel="Next page"
      nextClassName={s.pagination__next}
      nextLabel={<HiChevronDown className={s.pagination__icon} aria-hidden />}
      nextLinkClassName={s.pagination__nextLink}
      pageClassName={s.pagination__page}
      pageCount={pageCount}
      pageLinkClassName={s.pagination__pageLink}
      pageRangeDisplayed={pageRangeDisplayed}
      previousAriaLabel="Previous page"
      previousClassName={s.pagination__previous}
      previousLabel={
        <HiChevronDown className={s.pagination__icon} aria-hidden />
      }
      previousLinkClassName={s.pagination__previousLink}
      onPageChange={handlePageChange}
      {...rest}
    />
  )
}
