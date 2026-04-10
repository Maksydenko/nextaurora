import { type JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { InputView } from '@/views/forms'

import { generateMetaTitle } from '@/shared/lib'
import { type PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Input')
})

const FormsInputPage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <InputView />
}

export default FormsInputPage
