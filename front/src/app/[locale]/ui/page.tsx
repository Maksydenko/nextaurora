import { type JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { UiOverview } from '@/views/ui'

import { generateMetaTitle } from '@/shared/lib'
import { type PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('UI')
})

const UiIndexPage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <UiOverview />
}

export default UiIndexPage
