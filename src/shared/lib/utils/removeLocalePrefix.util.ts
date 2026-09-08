/**
 * Strips a two-letter locale segment from the start of a pathname when present.
 *
 * @param pathname - Typically `location.pathname` (with or without leading slash).
 * @returns Path without the first segment when it looks like a locale; otherwise unchanged.
 */
export const removeLocalePrefix = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean)

  if (parts.length > 1 && parts[0].length === 2) {
    return `/${parts.slice(1).join('/')}`
  }

  return pathname
}
