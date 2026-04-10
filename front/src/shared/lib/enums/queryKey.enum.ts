import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const QueryKey = {} as const
export type QueryKey = ValueOf<typeof QueryKey>
