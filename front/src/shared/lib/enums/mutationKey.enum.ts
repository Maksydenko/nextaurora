import type { ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * TanStack Query mutation keys (extend as mutations are added).
 */
export const MutationKey = {} as const
export type MutationKey = ValueOf<typeof MutationKey>
