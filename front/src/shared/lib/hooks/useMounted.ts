'use client'

import { useEffect, useState } from 'react'

export const useMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false)

  // Mark the tree as mounted after the first client commit.
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}
