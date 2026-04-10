'use client'

import { type JSX, useTransition } from 'react'

import { useParams } from 'next/navigation'

import { clsx } from 'clsx'
import { useLocale } from 'next-intl'

import { usePathname, useRouter } from '@/i18n/navigation'

import { localeData } from './locale.data'

import s from './LocaleSwitcher.module.scss'

interface LocaleSwitcherProps {
  className?: string
}

export const LocaleSwitcher = ({
  className
}: LocaleSwitcherProps): JSX.Element => {
  const [isPending, startTransition] = useTransition()

  const params = useParams()
  const activeLocale = useLocale()

  const { replace } = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (value: string) => {
    if (value === activeLocale || isPending) {
      return
    }

    startTransition(() => {
      replace(
        {
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks
          params,
          pathname
        },
        {
          locale: value
        }
      )
    })
  }

  return (
    <div className={clsx(s.localeSwitcher, className)}>
      <ul aria-label="Language" className={s.localeSwitcher__list}>
        {localeData.map(({ id, label, value }) => (
          <li key={id} className={s.localeSwitcher__item}>
            <button
              className={s.localeSwitcher__btn}
              disabled={value === activeLocale || isPending}
              type="button"
              onClick={() => handleLocaleChange(value)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
