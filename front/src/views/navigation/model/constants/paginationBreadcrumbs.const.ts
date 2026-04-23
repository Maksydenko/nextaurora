import { Pathname } from '@/shared/config'
import type { Option } from '@/shared/model'

/**
 * Breadcrumb trail for the pagination demo page.
 */
export const paginationBreadcrumbs: Option[] = [
  {
    id: 'home',
    label: 'Home',
    value: Pathname.Home
  },
  {
    id: 'navigation',
    label: 'Navigation',
    value: Pathname.Navigation
  },
  {
    id: 'pagination',
    label: 'Pagination',
    value: Pathname.Pagination
  }
]
