import { Pathname } from '@/shared/config'
import { type Option } from '@/shared/model'

export const paginationBreadcrumbs: Option[] = [
  { id: 'home', label: 'Home', value: Pathname.Home },
  { id: 'navigation', label: 'Navigation', value: Pathname.Navigation },
  { id: 'pagination', label: 'Pagination', value: Pathname.Pagination }
]
