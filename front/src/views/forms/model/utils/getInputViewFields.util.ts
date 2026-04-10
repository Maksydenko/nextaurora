import { formConfig } from '@/shared/config'
import { type Field } from '@/shared/model'

import { type InputViewFormValues } from '../interfaces/inputViewForm.interface'

export const getInputViewFields = (): Field<InputViewFormValues>[] => [
  {
    label: 'Title',
    maxLength: formConfig.title.max,
    name: 'title',
    placeholder: 'Short title',
    type: 'text'
  },
  {
    label: 'Description',
    maxLength: formConfig.description.max,
    name: 'description',
    placeholder: 'Long description',
    type: 'textarea'
  }
]
