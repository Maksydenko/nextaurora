import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'

/** Breadcrumb trail for the forms overview demo page. */
export const formsOverviewBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'forms', label: 'Forms', value: Pathname.Forms }
]

/** Breadcrumb trail for the input form subpage. */
export const formsInputBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'forms', label: 'Forms', value: Pathname.Forms },
  { id: 'input', label: 'Input', value: Pathname.FormsInput }
]

/** Breadcrumb trail for the phone form subpage. */
export const formsPhoneBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'forms', label: 'Forms', value: Pathname.Forms },
  { id: 'phone', label: 'Phone', value: Pathname.FormsPhone }
]
