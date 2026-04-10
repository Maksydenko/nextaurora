import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const FetchStatus = {
  Fetching: 'fetching',
  Idle: 'idle',
  Paused: 'paused'
} as const
export type FetchStatus = ValueOf<typeof FetchStatus>

export const QueryStatus = {
  Error: 'error',
  Pending: 'pending',
  Success: 'success'
} as const
export type QueryStatus = ValueOf<typeof QueryStatus>
