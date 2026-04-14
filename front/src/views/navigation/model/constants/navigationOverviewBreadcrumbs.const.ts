import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'

/** Breadcrumb trail for the navigation overview demo page. */
export const navigationOverviewBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'navigation', label: 'Navigation', value: Pathname.Navigation }
]
