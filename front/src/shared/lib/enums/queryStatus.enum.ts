import { type ValueOf } from '@/shared/model/types/valueOf.type'

/** TanStack Query `fetchStatus` values surfaced in UI or tests. */
export const FetchStatus = {
  Fetching: 'fetching',
  Idle: 'idle',
  Paused: 'paused'
} as const

/** Union of {@link FetchStatus} string literals. */
export type FetchStatus = ValueOf<typeof FetchStatus>

/** TanStack Query `status` values for settled queries. */
export const QueryStatus = {
  Error: 'error',
  Pending: 'pending',
  Success: 'success'
} as const

/** Union of {@link QueryStatus} string literals. */
export type QueryStatus = ValueOf<typeof QueryStatus>
