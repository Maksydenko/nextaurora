interface Object {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [key: string]: any
}

export const checkKeyByTypes = <T extends Object, K extends Object>(
  item: K | T,
  key: string
): item is T => key in item
