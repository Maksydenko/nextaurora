import { z } from 'zod'

import { formConfig } from '@/shared/config'

const DESCRIPTION_MAX = formConfig.description.max
const TITLE_MAX = formConfig.title.max

/**
 * Zod schema for the input showcase form (title and description).
 */
export const inputViewFormSchema = z.object({
  description: z
    .string()
    .trim()
    .min(1, 'Description is required')
    .max(
      DESCRIPTION_MAX,
      `Description must be at most ${String(DESCRIPTION_MAX)} characters`
    ),
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(TITLE_MAX, `Title must be at most ${String(TITLE_MAX)} characters`)
})
