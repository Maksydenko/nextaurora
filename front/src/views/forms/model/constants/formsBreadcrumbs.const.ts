import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'

export const formsOverviewBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'forms', label: 'Forms', value: Pathname.Forms }
]

export const formsInputBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'forms', label: 'Forms', value: Pathname.Forms },
  { id: 'input', label: 'Input', value: Pathname.FormsInput }
]

export const formsPhoneBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'forms', label: 'Forms', value: Pathname.Forms },
  { id: 'phone', label: 'Phone', value: Pathname.FormsPhone }
]
