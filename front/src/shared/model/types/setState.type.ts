import { type Dispatch, type SetStateAction } from 'react'

/**
 * Alias for React’s `Dispatch<SetStateAction<T>>` used in shared hook return types.
 *
 * @typeParam T - State value held by the corresponding `useState`.
 */
export type SetState<T> = Dispatch<SetStateAction<T>>
