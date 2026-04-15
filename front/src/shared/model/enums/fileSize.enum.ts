import { type ValueOf } from '@/shared/model/types/valueOf.type'

const BYTES_IN_KB = 1024

/**
 * Common byte multiples for upload limits and display.
 */
export const FileSize = {
  BytesInKB: BYTES_IN_KB,
  BytesInMB: BYTES_IN_KB * 1024
} as const
export type FileSize = ValueOf<typeof FileSize>
