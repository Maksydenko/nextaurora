'use client'

import type { JSX } from 'react'

import { clsx } from 'clsx'
import { useTheme } from 'next-themes'

import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { useMounted } from '@/shared/lib'

import { Theme } from './theme.enum'

import { themes } from './themes.data'

import s from './ThemeSwitcher.module.scss'

interface ThemeSwitcher {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcher): JSX.Element => {
  const { setTheme, theme } = useTheme()
  const isMounted = useMounted()

  const selectedTheme: Theme = (theme as Theme) ?? Theme.System

  return (
    <ToggleGroup.Root
      aria-label="Theme"
      className={clsx(s.themeSwitcher, className)}
      disabled={!isMounted}
      type="single"
      value={selectedTheme}
      onValueChange={value => {
        if (!isMounted || !value) {
          return
        }

        setTheme(value)
      }}
    >
      {themes.map(({ icon: Icon, id, label, value }) => (
        <ToggleGroup.Item
          key={id}
          aria-label={label}
          className={s.themeSwitcher__item}
          disabled={value === selectedTheme}
          value={value}
        >
          <Icon className={s.themeSwitcher__icon} aria-hidden />
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  )
}
