import { type QueryClient } from '@tanstack/react-query'

import { type QueryKey } from '../enums/queryKey.enum'

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
