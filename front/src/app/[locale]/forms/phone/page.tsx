import type { JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { PhoneView } from '@/views/forms'

import { generateMetaTitle } from '@/shared/lib'
import type { PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Phone')
})

const FormsPhonePage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <PhoneView />
}

export default FormsPhonePage
