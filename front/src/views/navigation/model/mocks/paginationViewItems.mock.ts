import type { PaginationViewItem } from '../interfaces/paginationViewItem.interface'

const itemsCount = 120

/**
 * Synthetic pagination rows for the navigation demo table.
 */
export const paginationViewItems: PaginationViewItem[] = Array.from(
  { length: itemsCount },
  (_, i) => {
    const number = i + 1

    return {
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      id: `item-${String(number).padStart(3, '0')}`,
      ordinal: number,
      title: `Item ${String(number).padStart(2, '0')}`
    }
  }
)

/**
 * Page size used with {@link paginationViewItems} in the pagination demo.
 */
export const paginationViewItemsPerPage = 12
