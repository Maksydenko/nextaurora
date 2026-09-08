'use client'

import { useEffect } from 'react'

/**
 * Subscribes to a `window` event and runs the listener once immediately, then on every dispatch.
 *
 * @param type - DOM event name (for example `"resize"`).
 * @param listener - Handler invoked synchronously on mount and on each matching event.
 *
 * @remarks If `listener` is not stable (new function each render), the effect tears down and re-subscribes.
 */
export const useWindowListener = (type: string, listener: () => void): void => {
  /**
   * Registers the listener, invokes it for the current state, and removes it on teardown.
   */
  useEffect(() => {
    listener()
    window.addEventListener(type, listener)

    return () => {
      window.removeEventListener(type, listener)
    }
  }, [type, listener])
}
