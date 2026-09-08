interface IsValueInSet<T> {
  data: T[] | undefined
  key: keyof T
  value: T[keyof T]
}

/**
 * Checks whether a value appears for a given property across a collection.
 *
 * @typeParam T - Element type of the `data` array.
 * @param data - Records to scan; empty or `undefined` yields `false`.
 * @param key - Property name used for uniqueness.
 * @param value - Value to look up in the derived set.
 * @returns `true` if any item has `item[key] === value`.
 */
export const isValueInSet = <T>({
  data,
  key,
  value
}: IsValueInSet<T>): boolean => {
  if (!data?.length) {
    return false
  }

  const setId = new Set(data.map(item => item[key]))

  return setId.has(value)
}
