/**
 * Appends a required-field asterisk when `required` is `true`.
 *
 * @param label - Base label text.
 * @param required - When truthy, suffixes `*`.
 * @returns `label` with optional `*`.
 */
export const formatLabel = (label: string, required?: boolean): string =>
  label + (required ? '*' : '')
