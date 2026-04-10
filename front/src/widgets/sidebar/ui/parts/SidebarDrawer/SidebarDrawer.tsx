'use client'

import { type JSX } from 'react'

import { Drawer } from 'vaul'

import { sidebarNavGroups } from '../../../model'
import { SidebarNav } from '../SidebarNav/SidebarNav'

import s from './SidebarDrawer.module.scss'

interface SidebarDrawerProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const SidebarDrawer = ({
  isOpen,
  onOpenChange
}: SidebarDrawerProps): JSX.Element => (
  <Drawer.Root
    direction="left"
    open={isOpen}
    shouldScaleBackground={false}
    onOpenChange={onOpenChange}
  >
    <Drawer.Portal>
      <Drawer.Overlay className={s.sidebarDrawer__overlay} />

      <Drawer.Content
        aria-describedby={undefined}
        className={s.sidebarDrawer__content}
        id="sidebarNavigation"
      >
        <Drawer.Title className={s.sidebarDrawer__title}>
          Sidebar navigation
        </Drawer.Title>

        <SidebarNav
          className={s.sidebarDrawer__nav}
          groups={sidebarNavGroups}
          layout="drawer"
        />
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
)
