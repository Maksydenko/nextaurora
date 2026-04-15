import type { JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { SemiCircleProgressView } from '@/views/ui'

import { generateMetaTitle } from '@/shared/lib'
import type { PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Semi-circle progress')
})

const UiSemiCircleProgressPage = async (
  props: PageProps
): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <SemiCircleProgressView />
}

export default UiSemiCircleProgressPage
