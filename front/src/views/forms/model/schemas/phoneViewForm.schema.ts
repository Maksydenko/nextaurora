import { isValidPhoneNumber } from 'libphonenumber-js'
import { z } from 'zod'

import { formConfig } from '@/shared/config'

const MOBILE_MAX = formConfig.phone.mobile.max

export const phoneViewFormSchema = z.object({
  mobile: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .max(
      MOBILE_MAX,
      `Phone number must be at most ${String(MOBILE_MAX)} characters`
    )
    .refine(value => isValidPhoneNumber(value), {
      message: 'Enter a valid phone number'
    })
})
