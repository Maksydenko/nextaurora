import { atom } from 'jotai'

import { type Option } from '../interfaces/option.interface'

/**
 * Client-side breadcrumb trail for the shell header; cleared when nothing sets it.
 */
export const breadcrumbsAtom = atom<null | Option[]>(null)
