import { type ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * TanStack Query cache keys used across the app (extend this object as features grow).
 */
export const QueryKey = {} as const

/** Union of {@link QueryKey} cache key literals. */
export type QueryKey = ValueOf<typeof QueryKey>
