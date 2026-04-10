import { type JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { MapView } from '@/views/ui'

import { generateMetaTitle } from '@/shared/lib'
import { type PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Map')
})

const UiMapPage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <MapView />
}

export default UiMapPage
