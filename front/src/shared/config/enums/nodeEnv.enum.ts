import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const NodeEnv = {
  Development: 'development',
  Production: 'production',
  Staging: 'staging'
} as const
export type NodeEnv = ValueOf<typeof NodeEnv>
