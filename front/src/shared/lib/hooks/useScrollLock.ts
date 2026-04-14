'use client'

import { useEffect, useState } from 'react'

import { type SetState } from '@/shared/model'

interface UseScrollLockReturn {
  isScrollLocked: boolean
  setIsScrollLocked: SetState<boolean>
}

/**
 * Toggles a `body` scroll lock and optional `inert` attributes on elements matched by selectors.
 *
 * @param inerts - CSS selectors for elements to mark `inert` while locked.
 * @defaultValue `[]`
 *
 * @returns `isScrollLocked` plus the React state setter for that flag.
 */
export const useScrollLock = (inerts: string[] = []): UseScrollLockReturn => {
  const [isScrollLocked, setIsScrollLocked] = useState(false)

  interface HandleInerts {
    (elements: (Element | null)[]): void
  }

  const setInerts: HandleInerts = elements => {
    elements.forEach(element => {
      element?.setAttribute('inert', '')
    })
  }

  const removeInerts: HandleInerts = elements => {
    elements.forEach(element => {
      element?.removeAttribute('inert')
    })
  }

  /**
   * Applies or removes the lock class and inert flags when lock state or selector list changes.
   *
   * @remarks Cleanup always clears `body.lock` and inert flags so the document cannot stay stuck.
   */
  useEffect(() => {
    const { body } = document

    const inertElements = inerts.map(inert => document.querySelector(inert))

    if (isScrollLocked) {
      body.classList.add('lock')
      setInerts(inertElements)
    } else {
      body.classList.remove('lock')
      removeInerts(inertElements)
    }

    return () => {
      body.classList.remove('lock')
      removeInerts(inertElements)
    }
  }, [inerts, isScrollLocked])

  return {
    isScrollLocked,
    setIsScrollLocked
  }
}
