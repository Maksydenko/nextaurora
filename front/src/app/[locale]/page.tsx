import type { JSX } from 'react'

import { getTranslations, setRequestLocale } from 'next-intl/server'

import Home from '@/views/home'

import { Translation } from '@/shared/config'
import { generateMetaTitle } from '@/shared/lib'
import type { PageProps, Params } from '@/shared/model'

export const generateMetadata = async ({
  params
}: PageProps): Promise<{
  title: string
}> => {
  const { locale } = await params
  // eslint-disable-next-line unused-imports/no-unused-vars
  const tShared = await getTranslations({
    locale,
    namespace: Translation.Shared
  })

  return {
    title: generateMetaTitle('Home')
  }
}

interface HomePageProps {
  params: Promise<Params>
}

const HomePage = async (props: HomePageProps): Promise<JSX.Element> => {
  const params = await props.params
  const { locale } = params

  setRequestLocale(locale)

  return <Home />
}

export default HomePage
