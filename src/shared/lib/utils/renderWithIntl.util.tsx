import type { ReactNode } from 'react'

import { type Messages, NextIntlClientProvider } from 'next-intl'
import type { DeepPartial } from 'react-hook-form'

import { render, type RenderOptions } from '@testing-library/react'

import { Locale } from '@/shared/config'

interface RenderWithIntlOptions extends Omit<RenderOptions, 'wrapper'> {
  locale?: Locale
  messages?: DeepPartial<Messages>
}

export const renderWithIntl = (
  ui: ReactNode,
  {
    locale = Locale.Default,
    messages,
    ...restOptions
  }: RenderWithIntlOptions = {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
) =>
  render(
    <NextIntlClientProvider locale={locale} messages={messages}>
      {ui}
    </NextIntlClientProvider>,
    restOptions
  )
