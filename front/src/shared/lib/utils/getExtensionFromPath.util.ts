interface GetExtensionFromPath {
  (path: string): null | string
}

/**
 * Extracts the final file extension from a path-like string.
 *
 * @param path - File or URL path; may include multiple dots.
 * @returns Extension without the leading dot, or `null` when none is present.
 */
export const getExtensionFromPath: GetExtensionFromPath = path => {
  const regex = /(?:\.([^.]+))?$/
  const matches = regex.exec(path)

  if (matches && matches[1]) {
    return matches[1]
  }

  return null
}
