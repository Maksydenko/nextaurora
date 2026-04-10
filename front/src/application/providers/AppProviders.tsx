import { type JSX, type ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'

import { type Locale } from '@/shared/config'

import { NextIntlProvider } from './nextIntlProvider'
import { QueryProvider } from './query/queryProvider'

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
