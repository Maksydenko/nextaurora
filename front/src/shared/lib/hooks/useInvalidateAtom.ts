import { useAtom } from 'jotai'
import { queryClientAtom } from 'jotai-tanstack-query'

import { type QueryKey } from '../enums/queryKey.enum'

/**
 * Builds an invalidator for TanStack Query using the Jotai-backed `QueryClient`.
 *
 * @param queryKeys - Logical cache keys to invalidate.
 * @returns Function that runs `invalidateQueries` for each key and resolves with `Promise.allSettled` results.
 *
 * @remarks Reads `queryClient` from `queryClientAtom` (`jotai-tanstack-query`).
 */
export const useInvalidateAtom = (
  queryKeys: QueryKey[]
): (() => Promise<PromiseSettledResult<void>[]>) => {
  const [queryClient] = useAtom(queryClientAtom)

  return (): Promise<PromiseSettledResult<void>[]> =>
    Promise.allSettled(
      queryKeys.map(key =>
        queryClient.invalidateQueries({
          queryKey: [key]
        })
      )
    )
}
