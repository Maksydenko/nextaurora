import { type JSX, type ReactNode } from 'react'

import { RootDocument } from '@/application/documents'

import { type Locale } from '@/shared/config'
import { type PageProps } from '@/shared/model'

import { routing } from '@/i18n/routing'

// Dynamic params
export const dynamicParams = false

// Static params

interface GenerateStaticParamsReturn {
  locale: Locale
}

export const generateStaticParams = (): GenerateStaticParamsReturn[] =>
  routing.locales.map(locale => ({
    locale
  }))

// Layout

interface LocaleLayoutProps extends PageProps {
  children: ReactNode
}

const LocaleLayout = async ({
  children,
  ...rest
}: LocaleLayoutProps): Promise<JSX.Element> => {
  const { locale } = await rest.params

  return <RootDocument locale={locale}>{children}</RootDocument>
}

export default LocaleLayout
