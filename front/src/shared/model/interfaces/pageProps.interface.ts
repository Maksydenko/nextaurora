import { type Locale } from '@/shared/config'

export interface PageProps<T = unknown> {
  params: Promise<Params<T>>
  searchParams?: Promise<T>
}

export interface Params<T = unknown> {
  [key: string]: Locale | T
  locale: Locale
}
