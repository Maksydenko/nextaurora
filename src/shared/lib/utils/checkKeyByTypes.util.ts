interface Object {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [key: string]: any
}

/**
 * Narrowing helper: checks that a string key exists on a loosely typed object.
 *
 * @typeParam T - Target shape after narrowing.
 * @typeParam K - Alternate shape without the discriminating key.
 * @param item - Value that may be `T` or `K`.
 * @param key - Property name expected on `T`.
 * @returns Type predicate `item is T` when `key in item`.
 */
export const checkKeyByTypes = <T extends Object, K extends Object>(
  item: K | T,
  key: string
): item is T => key in item
