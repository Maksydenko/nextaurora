'use client'

import { useEffect } from 'react'

export const useWindowListener = (type: string, listener: () => void): void => {
  // Attach the listener and invoke it once for the initial layout/window state.
  useEffect(() => {
    listener()
    window.addEventListener(type, listener)

    return () => {
      window.removeEventListener(type, listener)
    }
  }, [type, listener])
}
