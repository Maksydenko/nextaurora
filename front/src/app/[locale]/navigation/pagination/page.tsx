import { type JSX } from 'react'

import { setRequestLocale } from 'next-intl/server'

import { PaginationView } from '@/views/navigation'

import { generateMetaTitle } from '@/shared/lib'
import { type PageProps } from '@/shared/model'

interface PaginationSearchParams {
  page?: string
}

export const generateMetadata = async (): Promise<{ title: string }> => ({
  title: generateMetaTitle('Pagination')
})

const NavigationPaginationPage = async (
  props: PageProps<PaginationSearchParams>
): Promise<JSX.Element> => {
  const params = await props.params
  const searchParams = (await props.searchParams) ?? {}

  setRequestLocale(params.locale)

  return <PaginationView locale={params.locale} searchParams={searchParams} />
}

export default NavigationPaginationPage
