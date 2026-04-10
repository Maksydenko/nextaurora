import { type JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { SliderView } from '@/views/ui'

import { generateMetaTitle } from '@/shared/lib'
import { type PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Slider')
})

const UiSliderPage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <SliderView />
}

export default UiSliderPage
