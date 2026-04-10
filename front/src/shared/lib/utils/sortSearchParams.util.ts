export const sortSearchParams = (params: URLSearchParams): string => {
  const sortedParams = new URLSearchParams()
  const keys = Array.from(params.keys())
  const sortedKeys = keys.sort()

  sortedKeys.forEach(key => {
    const values = params.getAll(key)

    values.forEach(value => sortedParams.append(key, value))
  })

  return String(sortedParams)
}
