import type { ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * TanStack Query cache keys used across the app (extend this object as features grow).
 */
export const QueryKey = {} as const
export type QueryKey = ValueOf<typeof QueryKey>
