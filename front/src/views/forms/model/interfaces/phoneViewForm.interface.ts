import type { z } from 'zod'

import type { phoneViewFormSchema } from '../schemas/phoneViewForm.schema'

/**
 * Values shape for the phone showcase form, inferred from `phoneViewFormSchema`.
 */
export type PhoneViewFormValues = z.infer<typeof phoneViewFormSchema>

/**
 * Re-exports {@link phoneViewFormSchema} for consumers that import from the interface barrel.
 */
export { phoneViewFormSchema } from '../schemas/phoneViewForm.schema'
