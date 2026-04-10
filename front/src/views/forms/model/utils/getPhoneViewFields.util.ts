import { formConfig } from '@/shared/config'
import { type Field } from '@/shared/model'

import { type PhoneViewFormValues } from '../interfaces/phoneViewForm.interface'

export const getPhoneViewFields = (): Field<PhoneViewFormValues>[] => [
  {
    label: 'Mobile',
    maxLength: formConfig.phone.mobile.max,
    name: 'mobile',
    placeholder: 'Enter phone number',
    type: 'tel'
  }
]
