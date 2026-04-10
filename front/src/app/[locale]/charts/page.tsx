import { type JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { ChartsOverview } from '@/views/charts'

import { generateMetaTitle } from '@/shared/lib'
import { type PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Charts')
})

const ChartsPage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <ChartsOverview />
}

export default ChartsPage
