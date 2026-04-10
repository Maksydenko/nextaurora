import { type JSX, type ReactNode } from 'react'

import clsx from 'clsx'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { inter, jetbrainsMono, type Locale, NodeEnv } from '@/shared/config'

import { AppProviders } from '../providers/AppProviders'
import { AppShell } from '../shells/AppShell'

import '@/application/styles/globals.scss'

interface RootDocumentProps {
  children: ReactNode
  locale: Locale
}

export const RootDocument = async ({
  children,
  locale
}: RootDocumentProps): Promise<JSX.Element> => (
  <html
    className={clsx(inter.variable, jetbrainsMono.variable)}
    id="html"
    lang={locale}
    suppressHydrationWarning
  >
    <body>
      <AppProviders locale={locale}>
        <AppShell>{children}</AppShell>

        {process.env.NODE_ENV !== NodeEnv.Development && (
          <>
            <Analytics />

            <SpeedInsights />
          </>
        )}
      </AppProviders>
    </body>
  </html>
)
