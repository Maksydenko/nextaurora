import tlds from 'tlds'

/**
 * Validates that an email address uses a TLD present in the public suffix list.
 *
 * @param email - Full email string; only the domain segment after `@` is inspected.
 * @returns `false` when the domain lacks a dot, has no TLD, or the TLD is unknown.
 */
export const checkValidTld = (email: string): boolean => {
  const [, domain] = email.split('@')

  if (!domain?.includes('.')) {
    return false
  }

  const tld = domain.split('.').pop()

  return tlds.includes(tld || '')
}
