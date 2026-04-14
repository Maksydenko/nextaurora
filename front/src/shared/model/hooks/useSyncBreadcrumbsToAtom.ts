'use client'

import { useLayoutEffect } from 'react'

import { useSetAtom } from 'jotai'

import { type Option } from '../interfaces/option.interface'

import { breadcrumbsAtom } from '../atoms/breadcrumbs.atom'

/**
 * Keeps the document breadcrumbs atom in sync with the current trail for the shell layout.
 *
 * @param breadcrumbs - Items to show in the header; atom is cleared when the hook unmounts.
 *
 * @remarks Client-only (`useSetAtom`); mount in a client boundary near the shell that reads {@link breadcrumbsAtom}.
 */
export const useSyncBreadcrumbsToAtom = (breadcrumbs: Option[]): void => {
  const setBreadcrumbs = useSetAtom(breadcrumbsAtom)

  /**
   * Writes the latest trail before paint and clears the atom on cleanup.
   *
   * @remarks Uses `useLayoutEffect` so the first paint already sees the correct breadcrumbs.
   */
  useLayoutEffect(() => {
    setBreadcrumbs(breadcrumbs)

    return () => {
      setBreadcrumbs(null)
    }
  }, [breadcrumbs, setBreadcrumbs])
}
