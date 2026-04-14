import { type JSX, type ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'

import { type Locale } from '@/shared/config'

import { NextIntlProvider } from './nextIntl.provider'
import { QueryProvider } from './query/query.provider'

interface AppProvidersProps {
  children: ReactNode
  locale: Locale
}

export const AppProviders = ({
  children,
  locale
}: AppProvidersProps): JSX.Element => (
  <QueryProvider>
    <NextIntlProvider locale={locale}>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlProvider>
  </QueryProvider>
)
