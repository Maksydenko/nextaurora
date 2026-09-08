'use client'

import { type JSX, useMemo } from 'react'

import { clsx } from 'clsx'

import type { Option } from '@/shared/model'
import { Accordion } from '@/shared/ui'

import { Link, usePathname } from '@/i18n/navigation'

import s from './SidebarNav.module.scss'

interface SidebarNavProps {
  className?: string
  groups: Option<Option[]>[]
  layout?: 'default' | 'drawer'
}

export const SidebarNav = ({
  className,
  groups,
  layout = 'default'
}: SidebarNavProps): JSX.Element => {
  const pathname = usePathname()

  const defaultOpen = useMemo(
    () => groups.map(group => String(group.id)),
    [groups]
  )

  return (
    <nav
      aria-label="Sidebar"
      className={clsx(
        s.sidebarNav,
        layout === 'drawer' && s.sidebarNav_drawer,
        className
      )}
    >
      <Accordion
        className={s.sidebarNav__accordion}
        contentTextClassName={s.sidebarNav__accordionContent}
        defaultValue={defaultOpen}
        items={groups.map(group => ({
          id: group.id,
          label: group.label,
          value: (
            <ul className={s.sidebarNav__subList}>
              {group.value.map(link => (
                <li key={link.id} className={s.sidebarNav__subItem}>
                  <Link
                    className={clsx(
                      s.sidebarNav__link,
                      link.value === pathname && s['sidebarNav__link--active']
                    )}
                    href={link.value}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )
        }))}
        type="multiple"
      />
    </nav>
  )
}
