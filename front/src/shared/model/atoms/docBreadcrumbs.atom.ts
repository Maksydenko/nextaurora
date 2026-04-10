import { atom } from 'jotai'

import { type Option } from '../interfaces/option.interface'

export const docBreadcrumbsAtom = atom<null | Option[]>(null)
