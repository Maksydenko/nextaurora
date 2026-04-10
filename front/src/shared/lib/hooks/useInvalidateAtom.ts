import { useAtom } from 'jotai'
import { queryClientAtom } from 'jotai-tanstack-query'

import { type QueryKey } from '../enums/queryKey.enum'

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
