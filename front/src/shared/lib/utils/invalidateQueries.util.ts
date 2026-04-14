import { type QueryClient } from '@tanstack/react-query'

import { type QueryKey } from '../enums/queryKey.enum'

/**
 * Invalidates multiple TanStack Query caches in parallel.
 *
 * @param queryClient - Client instance from React Query.
 * @param queryKeys - Logical keys to invalidate (wrapped as `[key]` query keys).
 * @returns Settled results from each `invalidateQueries` call.
 */
export const invalidateQueries = async (
  queryClient: QueryClient,
  queryKeys: QueryKey[]
): Promise<PromiseSettledResult<void>[]> =>
  Promise.allSettled(
    queryKeys.map(key =>
      queryClient.invalidateQueries({
        queryKey: [key]
      })
    )
  )
