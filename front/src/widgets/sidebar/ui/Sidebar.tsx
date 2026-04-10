'use client'

import { type JSX } from 'react'

import { clsx } from 'clsx'

import { sidebarNavGroups } from '../model'
import { SidebarMobileNavBar, SidebarNav } from './parts'

import s from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
  isSidebarOpen: boolean
  onSidebarOpenChange: (isOpen: boolean) => void
}

export const Sidebar = ({
  className,
  isSidebarOpen,
  onSidebarOpenChange
}: SidebarProps): JSX.Element => (
  <>
    <aside className={clsx(s.sidebar, className)}>
      <SidebarNav className={s.sidebar__nav} groups={sidebarNavGroups} />
    </aside>

    <SidebarMobileNavBar
      isOpen={isSidebarOpen}
      onOpenChange={onSidebarOpenChange}
    />
  </>
)
