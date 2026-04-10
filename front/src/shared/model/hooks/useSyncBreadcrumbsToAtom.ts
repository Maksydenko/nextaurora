'use client'

import { useLayoutEffect } from 'react'

import { useSetAtom } from 'jotai'

import { type Option } from '../interfaces/option.interface'

import { docBreadcrumbsAtom } from '../atoms/docBreadcrumbs.atom'

export const useSyncBreadcrumbsToAtom = (breadcrumbs: Option[]): void => {
  const setBreadcrumbs = useSetAtom(docBreadcrumbsAtom)

  // Run before paint so the atom matches the current breadcrumbs immediately.
  useLayoutEffect(() => {
    setBreadcrumbs(breadcrumbs)

    return () => {
      setBreadcrumbs(null)
    }
  }, [breadcrumbs, setBreadcrumbs])
}
