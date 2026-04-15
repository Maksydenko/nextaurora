import type { z } from 'zod'

import type { inputViewFormSchema } from '../schemas/inputViewForm.schema'

/**
 * Values shape for the input showcase form, inferred from `inputViewFormSchema`.
 */
export type InputViewFormValues = z.infer<typeof inputViewFormSchema>

/**
 * Re-exports {@link inputViewFormSchema} for consumers that import from the interface barrel.
 */
export { inputViewFormSchema } from '../schemas/inputViewForm.schema'
