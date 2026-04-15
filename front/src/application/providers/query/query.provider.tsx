'use client'

import type { JSX } from 'react'

import {
  QueryClientProvider,
  type QueryClientProviderProps
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { NodeEnv } from '@/shared/config'

import { getQueryClient } from './queryClient.util'

/**
 * Root TanStack Query provider with optional devtools in development.
 */
export const QueryProvider = ({
  children
}: Partial<QueryClientProviderProps>): JSX.Element => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {process.env.NODE_ENV === NodeEnv.Development && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}
