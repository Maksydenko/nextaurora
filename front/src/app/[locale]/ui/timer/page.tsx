import { type JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { TimerView } from '@/views/ui'

import { generateMetaTitle } from '@/shared/lib'
import { type PageProps } from '@/shared/model'

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Timer')
})

const UiTimerPage = async (props: PageProps): Promise<JSX.Element> => {
  const params = await props.params

  setRequestLocale(params.locale)

  return <TimerView />
}

export default UiTimerPage
