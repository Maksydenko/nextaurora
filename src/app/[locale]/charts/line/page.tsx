import type { JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { LineView } from '@/views/charts'

import { generateMetaTitle } from '@/shared/lib'
import type { PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Line chart')
})

const ChartsLinePage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <LineView />
}

export default ChartsLinePage
