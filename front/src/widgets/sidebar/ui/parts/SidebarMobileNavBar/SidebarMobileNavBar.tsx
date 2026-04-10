'use client'

import { type JSX } from 'react'

import { clsx } from 'clsx'
import { useAtomValue } from 'jotai'

import { Breakpoint } from '@/shared/config'
import { useMediaQuery } from '@/shared/lib'
import { docBreadcrumbsAtom } from '@/shared/model'
import { Breadcrumbs } from '@/shared/ui'

import { SidebarDrawer } from '../SidebarDrawer/SidebarDrawer'

import s from './SidebarMobileNavBar.module.scss'

interface SidebarMobileNavBarProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const SidebarMobileNavBar = ({
  isOpen,
  onOpenChange
}: SidebarMobileNavBarProps): JSX.Element => {
  const breadcrumbs = useAtomValue(docBreadcrumbsAtom)
  const isMobile = useMediaQuery(Breakpoint.LG)

  return (
    <>
      <div className={s.sidebarMobileNavBar}>
        <button
          aria-controls="sidebarNavigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={s.sidebarMobileNavBar__button}
          type="button"
          onClick={() => {
            onOpenChange(!isOpen)
          }}
        >
          <span
            className={clsx(
              s.sidebarMobileNavBar__buttonIcon,
              isOpen && s.sidebarMobileNavBar__buttonIcon_open
            )}
            aria-hidden
          >
            <span />

            <span />
          </span>
        </button>

        {!!breadcrumbs?.length && (
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
            className={s.sidebarMobileNavBar__breadcrumbs}
          />
        )}
      </div>

      {isMobile && (
        <SidebarDrawer isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
    </>
  )
}
