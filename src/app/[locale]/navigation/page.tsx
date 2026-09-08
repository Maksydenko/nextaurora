import type { JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { NavigationOverview } from '@/views/navigation'

import { generateMetaTitle } from '@/shared/lib'
import type { PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Navigation')
})

const NavigationIndexPage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <NavigationOverview />
}

export default NavigationIndexPage
