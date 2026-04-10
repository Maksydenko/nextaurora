import { type z } from 'zod'

import { type phoneViewFormSchema } from '../schemas/phoneViewForm.schema'

export type PhoneViewFormValues = z.infer<typeof phoneViewFormSchema>

export { phoneViewFormSchema } from '../schemas/phoneViewForm.schema'
