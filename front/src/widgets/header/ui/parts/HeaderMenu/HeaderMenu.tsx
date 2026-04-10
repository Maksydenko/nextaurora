'use client'

import { type JSX } from 'react'

import { clsx } from 'clsx'
import { Drawer } from 'vaul'

import { Breakpoint } from '@/shared/config'
import { useMediaQuery } from '@/shared/lib'
import { LocaleSwitcher, ThemeSwitcher } from '@/shared/ui'

import s from './HeaderMenu.module.scss'

interface HeaderMenuProps {
  className?: string
  isScrollLocked: boolean
  onClick: () => void
  onOpenChange: (isOpen: boolean) => void
}

export const HeaderMenu = ({
  className,
  isScrollLocked,
  onClick,
  onOpenChange
}: HeaderMenuProps): JSX.Element => {
  const isMobile = useMediaQuery(Breakpoint.LG)

  const nav = (
    <nav className={s.headerMenu__content}>
      <LocaleSwitcher className={s.headerMenu__localeSwitcher} />

      <ThemeSwitcher className={s.headerMenu__themeSwitcher} />
    </nav>
  )

  return (
    <div className={clsx(s.headerMenu, className)}>
      <button
        aria-label={isScrollLocked ? 'Close menu' : 'Open menu'}
        className={clsx(
          s.headerMenu__button,
          isScrollLocked && s.headerMenu__button_open
        )}
        type="button"
        onClick={onClick}
      >
        <span />
      </button>

      {isMobile ? (
        <Drawer.Root
          direction="right"
          open={isScrollLocked}
          shouldScaleBackground={false}
          noBodyStyles
          onOpenChange={onOpenChange}
        >
          <Drawer.Portal>
            <Drawer.Overlay className={s.headerMenu__drawerOverlay} />

            <Drawer.Content
              aria-describedby={undefined}
              className={s.headerMenu__drawerContent}
              id="headerSiteMenu"
            >
              <Drawer.Title className={s.headerMenu__drawerTitle}>
                Menu
              </Drawer.Title>

              {nav}
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      ) : (
        nav
      )}
    </div>
  )
}
