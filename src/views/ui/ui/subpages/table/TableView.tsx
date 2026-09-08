'use client'

import { type JSX, useMemo } from 'react'

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import { ShellView,Table } from '@/shared/ui'

import {
  uiTableBreadcrumbs,
  type UiTableRow,
  uiTableRows
} from '../../../model'

import s from './TableView.module.scss'

const columnHelper = createColumnHelper<UiTableRow>()

export const TableView = (): JSX.Element => {
  const columns = useMemo(
    () => [
      columnHelper.accessor('name', { header: 'Name' }),
      columnHelper.accessor('role', { header: 'Role' }),
      columnHelper.accessor('department', { header: 'Department' }),
      columnHelper.accessor('email', { header: 'Email' }),
      columnHelper.accessor('status', { header: 'Status' })
    ],
    []
  )

  const table = useReactTable({
    columns,
    data: uiTableRows,
    getCoreRowModel: getCoreRowModel(),
    getRowId: row => row.id
  })

  return (
    <ShellView
      breadcrumbs={uiTableBreadcrumbs}
      description={
        <>
          Data table built on <code>@tanstack/react-table</code>.
        </>
      }
      title="Table"
    >
      <div className={s.tableView__container}>
        <div className={s.tableView__box}>
          <Table className={s.tableView__table} table={table} />
        </div>
      </div>
    </ShellView>
  )
}
