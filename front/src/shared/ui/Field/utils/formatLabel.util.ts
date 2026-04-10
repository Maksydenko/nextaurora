export const formatLabel = (label: string, required?: boolean): string =>
  label + (required ? '*' : '')
