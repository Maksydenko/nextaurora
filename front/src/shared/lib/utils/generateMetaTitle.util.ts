/**
 * Builds a document title with the app suffix.
 *
 * @param title - Page-specific segment.
 * @returns `"${title} | NextAurora"`.
 */
export const generateMetaTitle = (title: string): string =>
  `${title} | NextAurora`
