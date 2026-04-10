import { type z } from 'zod'

import { type inputViewFormSchema } from '../schemas/inputViewForm.schema'

export type InputViewFormValues = z.infer<typeof inputViewFormSchema>

export { inputViewFormSchema } from '../schemas/inputViewForm.schema'
