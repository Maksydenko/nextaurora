'use client'

import { type JSX, useEffect } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { clsx } from 'clsx'

import { Breakpoint, Pathname } from '@/shared/config'
import { useScrollLock, useWindowListener } from '@/shared/lib'

import { HeaderMenu } from './parts'

import s from './Header.module.scss'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps): JSX.Element => {
  const BREAKPOINT = Breakpoint.LG

  const pathname = usePathname()

  const { isScrollLocked, setIsScrollLocked } = useScrollLock([
    'main',
    'footer'
  ])

  const unlockScroll = () => {
    if (!isScrollLocked) {
      return
    }

    setIsScrollLocked(false)
  }

  const unlockScrollOnBreakpoint = () => {
    const isMoreBreakpoint = window.innerWidth > BREAKPOINT

    if (isMoreBreakpoint && isScrollLocked) {
      unlockScroll()
    }
  }
  useWindowListener('resize', unlockScrollOnBreakpoint)

  const handleClick = () => {
    const isLessBreakpoint = window.innerWidth < BREAKPOINT

    if (!isLessBreakpoint) {
      return
    }

    setIsScrollLocked(!isScrollLocked)
  }

  // Close the mobile menu when navigation changes so the next page is usable.
  useEffect(
    () => {
      unlockScroll()
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [pathname]
  )

  return (
    <header className={clsx(s.header, className)}>
      <div className={s.header__container}>
        <div className={s.header__body}>
          <Link
            className={s.header__brand}
            href={Pathname.Home}
            onClick={unlockScroll}
          >
            NextAurora
          </Link>

          <div className={s.header__content}>
            <HeaderMenu
              className={s.header__menu}
              isScrollLocked={isScrollLocked}
              onClick={handleClick}
              onOpenChange={setIsScrollLocked}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
