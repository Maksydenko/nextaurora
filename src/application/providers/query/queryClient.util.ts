import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryClient
} from '@tanstack/react-query'

import { QueryStatus } from '@/shared/lib'
import { Time } from '@/shared/model'

const STALE_TIME_IN_SECONDS = 60

/**
 * Returns a TanStack `QueryClient` with shared defaults (stale time, retry, dehydration rules).
 */
const makeQueryClient = (): QueryClient =>
  new QueryClient({
    defaultOptions: {
      dehydrate: {
        // Include pending queries in dehydration
        shouldDehydrateQuery: query =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === QueryStatus.Pending
      },
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: STALE_TIME_IN_SECONDS * Time.MillisecondsInSecond
      }
    }
  })

/**
 * Browser singleton vs fresh server instance for React Query.
 *
 * @returns A `QueryClient` — new on the server each call, reused in the browser across suspends.
 *
 * @remarks Browser reuse avoids losing in-flight queries when React suspends before a boundary below the provider.
 */
export const getQueryClient = (): QueryClient => {
  let browserQueryClient: null | QueryClient = null

  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient()
    }

    return browserQueryClient
  }
}
