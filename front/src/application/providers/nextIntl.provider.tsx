import { type JSX, type ReactNode } from 'react'

import { notFound } from 'next/navigation'

import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

import { routing } from '@/i18n/routing'

interface NextIntlProviderProps {
  children: ReactNode
  locale: string
}

/**
 * Validates `locale`, loads messages, and wraps children with `next-intl` client provider.
 */
export const NextIntlProvider = async ({
  children,
  locale
}: NextIntlProviderProps): Promise<JSX.Element> => {
  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
