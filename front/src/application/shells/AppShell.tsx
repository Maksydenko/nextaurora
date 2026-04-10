'use client'

import { type JSX, type ReactNode, useCallback, useEffect, useState } from 'react'

import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

import { Breakpoint } from '@/shared/config'

import { usePathname } from '@/i18n/navigation'

import s from './AppShell.module.scss'

interface AppShellProps {
  children: ReactNode
}

export const AppShell = ({ children }: AppShellProps): JSX.Element => {
  const pathname = usePathname()
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false)
  }, [])

  useEffect(() => {
    closeSidebar()
  }, [pathname, closeSidebar])

  useEffect(() => {
    const mq = window.matchMedia(
      `(min-width: ${String(Math.ceil(Breakpoint.LG))}px)`
    )

    const onChange = (): void => {
      if (mq.matches) {
        closeSidebar()
      }
    }

    mq.addEventListener('change', onChange)

    return () => mq.removeEventListener('change', onChange)
  }, [closeSidebar])

  return (
    <div className={s.appShell}>
      <Header />

      <div className={s.appShell__body}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onSidebarOpenChange={setSidebarOpen}
        />

        <main className={s.appShell__main}>{children}</main>
      </div>
    </div>
  )
}
