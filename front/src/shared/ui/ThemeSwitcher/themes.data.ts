import { HiComputerDesktop, HiMoon, HiSun } from 'react-icons/hi2'

import { type OptionWithIcon } from '@/shared/model'

import { Theme } from './theme.enum'

export const themes: OptionWithIcon<Theme>[] = [
  {
    icon: HiSun,
    id: 1,
    label: 'Light',
    value: Theme.Light
  },
  {
    icon: HiComputerDesktop,
    id: 2,
    label: 'System',
    value: Theme.System
  },
  {
    icon: HiMoon,
    id: 3,
    label: 'Dark',
    value: Theme.Dark
  }
]
