import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const MutationKey = {} as const
export type MutationKey = ValueOf<typeof MutationKey>
