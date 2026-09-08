import type { Locale } from '@/shared/config'

/**
 * Next.js App Router page props with async `params` and optional `searchParams`.
 *
 * @typeParam T - Shape of dynamic route segments beyond `locale`, or `unknown` when unused.
 */
export interface PageProps<T = unknown> {
  params: Promise<Params<T>>
  searchParams?: Promise<T>
}

/**
 * Resolved route parameters including required `locale` and optional dynamic keys.
 *
 * @typeParam T - Additional param values merged with `locale`.
 */
export interface Params<T = unknown> {
  [key: string]: Locale | T
  locale: Locale
}
