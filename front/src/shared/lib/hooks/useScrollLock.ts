'use client'

import { useEffect, useState } from 'react'

import { type SetState } from '@/shared/model'

interface UseScrollLockReturn {
  isScrollLocked: boolean
  setIsScrollLocked: SetState<boolean>
}

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

  // Apply or clear scroll lock and inert targets when the open state changes.
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
