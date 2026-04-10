import { type ValueOf } from '@/shared/model/types/valueOf.type'

export const Protocol = {
  Http: 'http',
  Https: 'https'
} as const
export type Protocol = ValueOf<typeof Protocol>
