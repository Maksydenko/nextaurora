import type { ValueOf } from '@/shared/model/types/valueOf.type'

/**
 * Known Node.js runtime environments for conditional logging and tooling.
 */
export const NodeEnv = {
  Development: 'development',
  Production: 'production',
  Staging: 'staging'
} as const
export type NodeEnv = ValueOf<typeof NodeEnv>
